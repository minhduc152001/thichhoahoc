import { Request, Response } from "express";
import UserService from "../services/user.service";
import { IUserLoginArgs, IUserSignupArgs } from "../types/interfaces";

export default class UserCtrl {
  /**
   * sign up new user
   * @param req
   * @param res
   * @returns {signupResult}
   */
  static signup = async (req: Request, res: Response) => {
    try {
      const { email, firstName, lastName, password }: IUserSignupArgs =
        req.body;

      const signupResult: any = await UserService.signup({
        email,
        lastName,
        firstName,
        password,
      });

      // return infomation of new user
      return res.status(200).json({ signupResult });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  /**
   * Login
   * @param req
   * @param res
   * @returns {loginResult}
   */
  static login = async (req: Request, res: Response) => {
    try {
      const { email, password }: IUserLoginArgs = req.body;
      const loginResult = await UserService.login({ email, password });

      // return infomation of user and token
      return res.status(200).json({ loginResult });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
