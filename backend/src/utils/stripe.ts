import stripe from "../clients/stripe";

export const constructEvent = async (req: any) => {
  const event = stripe.webhooks.constructEvent(
    req.body,
    req.headers["stripe-signature"],
    process.env.STRIPE_WEBHOOK_SECRET as string
  );
  return event;
};
