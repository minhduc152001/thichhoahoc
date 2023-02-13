import { ApolloError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { IPayLoad, IUser } from "../types/interfaces";
import { isValidToken } from "./jwt";
import User from "../database/models/user.model";

export const context = async ({ req }: any) => {
  // get token
  const token = req.headers.authorization || "";

  // check valid token
  const isValidJwt = isValidToken(token);

  if (!isValidJwt) throw new ApolloError("Invalid token");

  // decode token
  const decoded = jwt.decode(token, { complete: true });

  // check null token
  if (decoded === null) {
    throw new ApolloError("Token not provided");
  }

  let user: IUser | null;

  if (token !== "") {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as IPayLoad;

    // get infomation of user
    user = await User.findOne({ email: decodedToken.email });
    if (user) {
      const { subscription, subscriptionExpiresAt } = user; // user's subscription

      // if user is newbie, return;
      //   if (
      //     subscription === "NORMAL" ||
      //     (subscriptionExpiresAt as any) < new Date()
      //   )
      //     return {
      //       token,
      //       profile: {
      //         _id: user._id,
      //         email: user.email,
      //         firstName: user.firstName,
      //         lastName: user.lastName,
      //         subscription: user.subscription,
      //       },
      //       authorityWithProjects: [],
      //     };

      // check subscription is valid and expired
      //   if (
      //     subscription &&
      //     subscriptionExpiresAt < new Date() &&
      //     (subscription === "TRIAL" ||
      //       ["STARTER", "BASIC", "MEDIUM", "PREMIUM"].includes(
      //         activeSubscription.split(" ")[1]
      //       ))
      //   )
      //     throw new ApolloError("Your subscription has not been activated yet!");
      return {
        token,
        profile: {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          subscription,
          subscriptionExpiresAt,
        },
      };
    }
    throw new ApolloError("Invalid token");
  }
  throw new ApolloError("Invalid token");
};
