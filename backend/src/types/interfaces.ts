import { ESubscription } from "../constants/enumTypes";

export interface IContext {
  token: string;
  profile: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    subscription: ESubscription;
    subscriptionExpiresAt: Date | null;
  };
}

export interface IUser {
  _id?: string;
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

export interface IPayLoad {
  userId: string;
  email: string;
}

export interface IUserSignupArgs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUserLoginArgs {
  email: string;
  password: string;
}
