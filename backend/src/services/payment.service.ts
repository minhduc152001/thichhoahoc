import Payment from "../database/models/payment.model";
import { IPayment } from "../types/interfaces";

export default class PaymentService {
  static createTransaction = async ({
    userId,
    customerId,
    priceId,
  }: IPayment) => {
    const transaction = await Payment.create({
      userId,
      customerId,
      priceId,
    });

    return transaction;
  };

  static updateStatusTransaction = async ({
    priceId,
    customerId,
    status,
  }: IPayment) => {
    await Payment.findOneAndUpdate(
      {
        customerId,
        priceId,
      },
      {
        $set: { status },
      }
    );
  };
}
