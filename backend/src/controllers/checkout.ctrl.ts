import { Request, Response } from "express";
import stripe from "../clients/stripe";
import PaymentService from "../services/payment.service";
import { constructEvent } from "../utils/stripe";
import { EPaymentStatus } from "../constants/enumTypes";
import UserService from "../services/user.service";
import { formatIntervalText } from "../utils/formatIntervalText";

export default class CheckoutController {
  static createCheckoutSession = async (req: Request, res: Response) => {
    const clientUrl = process.env.CLIENT_URL;
    const unlimitedPriceId = process.env.UNLIMITED_PRICE_ID;

    const { priceId, userId } = req.body;

    const { id: customerId } = await stripe.customers.create({
      description: userId,
    });

    // Create new Checkout Session for the order
    try {
      const session: any = await stripe.checkout.sessions.create({
        mode: priceId === unlimitedPriceId ? "payment" : "subscription",
        customer: customerId,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        success_url: `${clientUrl}/thanh-toan-thanh-cong?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${clientUrl}/thanh-toan-that-bai`,
        // automatic_tax: { enabled: true }
      });

      await PaymentService.upsertTransaction({
        userId,
        customerId,
        priceId,
      });

      return res.json({ code: 303, checkoutUrl: session.url });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };

  static webhooks = async (req: any, res: Response) => {
    let event: any;
    let paymentRecord;

    try {
      // construct stripe event
      event = await constructEvent(req);
    } catch (error) {
      console.log(error);
      console.log("⚠️  Webhook signature verification failed.");
      console.log(
        "⚠️  Check the env file and enter the correct webhook secret."
      );
      return res.status(400).json();
    }
    // Extract the object from the event.
    const dataObject = event.data.object;

    switch (event.type) {
      case "checkout.session.completed":
        console.log("checkout.session.completed");
        break;

      case "payment_intent.succeeded": {
        if (dataObject.description === null) {
          paymentRecord = await PaymentService.updateStatusTransaction({
            customerId: dataObject.customer,
            status: EPaymentStatus.Success,
          });

          await UserService.updateUser({
            _id: paymentRecord?.userId,
            subscription: "UNLIMITED",
            subscriptionExpiresAt: null,
          });

          console.log("payment_intent.succeeded");
        }
        break;
      }

      case "invoice.paid": {
        paymentRecord = await PaymentService.updateStatusTransaction({
          customerId: dataObject.customer,
          status: EPaymentStatus.Success,
        });

        await UserService.updateUser({
          _id: paymentRecord?.userId,
          subscription:
            formatIntervalText(
              dataObject.lines.data[0].plan.interval.toUpperCase() as string
            ) + "LY",
          subscriptionExpiresAt: new Date(
            dataObject.lines.data[0].period.end * 1000
          ),
        });

        console.log("invoice.paid");
        break;
      }

      case "invoice.payment_failed":
        console.log("invoice.payment_failed");
        break;

      case "customer.subscription.deleted":
        // get the subscription id
        const subscriptionId = dataObject.id;

        // catch request cancel subscription
        if (event.request != null) {
          //   await SubscriptionService.cancelSubscription(subscriptionId);
          console.log("The subscription was canceled!");
        }
        break;

      default:
        throw Error("Something was wrong, please try again!");
    }
    res.sendStatus(200);
  };
}
