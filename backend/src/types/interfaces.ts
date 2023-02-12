import { ESubscription } from "../constants/enumTypes";

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isEmailVerified: boolean;
  confirmationCode: string | null;
  subscription: ESubscription;
  subscriptionExpiresAt: Date | null;
  passwordResetToken: String | null;
  passwordResetExpiresAt: Date | null;
  createdAt: Date;
}
