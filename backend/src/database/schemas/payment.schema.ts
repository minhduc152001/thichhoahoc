import { Schema } from "mongoose";
import { IPayment } from "../../types/interfaces";
import { EPaymentStatus } from "../../constants/enumTypes";

const PaymentSchema = new Schema<IPayment>(
  {
    userId: { type: Schema.Types.ObjectId as any, required: true },
    customerId: { type: String, required: true },
    priceId: { type: String, required: true },
    status: { type: String, default: EPaymentStatus.Pending },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        // delete ret._id
      },
    },
  }
);

export default PaymentSchema;
