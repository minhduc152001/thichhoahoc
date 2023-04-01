import pkg from "mongoose";
import { IPayment } from "../../types/interfaces";
import PaymentSchema from "../schemas/payment.schema";
const { model } = pkg;

const Payment = model<IPayment>("Payment", PaymentSchema);

export default Payment;
