import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { IPayLoad, IUserLoginArgs, IUserSignupArgs } from "../types/interfaces";
import User from "../database/models/user.model";
import { ApolloError } from "apollo-server-express";

// Utilities
const generateAccessToken = ({ userId, email }: IPayLoad) => {
  const accessToken = jwt.sign(
    {
      userId,
      email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "30d" }
  );
  return accessToken;
};

const generateHashedPassword = async (rawPassword: string) => {
  const hashedPassword = await bcrypt.hash(rawPassword, 10);
  return hashedPassword;
};

const comparePassword = async (
  passwordUserInput: string,
  hashedPassword: string
) => {
  const result = await bcrypt.compare(passwordUserInput, hashedPassword);
  return result;
};

// Check with db model
const isEmailExisted = async (email: string) => {
  const user = await User.findOne({
    email,
  });

  return !!user;
};

export default class UserService {
  /**
   * get user by id
   * @param {string} id
   * @returns {user}
   */
  static getUserById = async (id: String) => {
    const user = await User.findById(id);
    return user;
  };

  /**
   * sign up
   * @param {IUserSignupArgs}
   * @returns {IUser}
   */
  static signup = async ({
    email,
    firstName,
    lastName,
    password: rawPassword,
  }: IUserSignupArgs): Promise<unknown> => {
    // check user exists
    if (await isEmailExisted(email))
      throw new ApolloError("Email already exists");

    // hash password
    let hashedPassword;
    if (rawPassword) {
      hashedPassword = await generateHashedPassword(rawPassword as string);
    }

    // new user
    const user = await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    // send email
    try {
      // create confirm url to verify
      // const confirmUrl = await this.createUrlConfirmationEmail(user.id);
      // send confirm email
      // await this.sendWelcomeEmail(user, confirmUrl);
    } catch (error) {
      // if can't send email, remove that user and notify the error
      // await UserModel.deleteUser(user);
      // throw new Error("Something was wrong, try again!");
    }

    return user;
  };

  static login = async ({ email, password }: IUserLoginArgs) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError("Wrong email or password");
    }

    const isCorrectPassword = await comparePassword(
      password,
      user.password as string
    );

    if (!isCorrectPassword) throw new ApolloError("Wrong email or password");

    // if (!user.isEmailVerified) {
    //   throw new ApolloError("Not verified");
    // }

    // Generate payload
    const payload: IPayLoad = {
      userId: user._id,
      email: user.email,
    };

    // Generate token
    const accessToken = generateAccessToken(payload);

    return {
      accessToken,
      profile: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        subscription: user.subscription,
        subscriptionExpiresAt: user.subscriptionExpiresAt,
        isEmailVerified: user.isEmailVerified,
      },
    };
  };
}
