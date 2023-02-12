import { Schema } from "mongoose";
import { IUser } from "../../types/interfaces";

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  isEmailVerified: { type: Boolean, require: false, default: null },
  confirmationCode: { type: String, required: false, default: null },
  subscription: {
    // enum: ["NORMAL", "MONTHLY", "ANNUALLY", "PERMANENT"],
    type: String,
    default: "NORMAL" as any,
  },
  subscriptionExpiresAt: { type: Date, required: false, default: null },
  passwordResetToken: { type: String, required: false, default: null },
  passwordResetExpiresAt: { type: String, required: false, default: null },
  createdAt: { type: Date, required: true, default: Date.now() },
});

export default UserSchema;
