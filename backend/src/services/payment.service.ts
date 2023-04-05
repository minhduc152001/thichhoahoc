import Payment from "../database/models/payment.model";
import { IPayment } from "../types/interfaces";

export default class PaymentService {
  static upsertTransaction = async ({
    userId,
    customerId,
    priceId,
  }: IPayment) => {
    const transaction = await Payment.findOneAndUpdate(
      {
        userId,
      },
      {
        customerId,
        priceId,
      },
      {
        upsert: true,
        new: true,
      }
    );

    return transaction;
  };

  static updateStatusTransaction = async ({ customerId, status }: IPayment) => {
    const transaction = await Payment.findOneAndUpdate(
      {
        customerId,
      },
      {
        $set: { status },
      }
    );

    return transaction;
  };
}
