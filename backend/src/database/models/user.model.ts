import pkg from "mongoose";
import { IUser } from "../../types/interfaces";
import UserSchema from "../schemas/user.schema";
const { model } = pkg;

const User = model<IUser>("User", UserSchema);

export const isEmailExisted = async (email: string) => {
  const user = await User.findOne({
    email,
  });

  return !!user;
};
export default User;
