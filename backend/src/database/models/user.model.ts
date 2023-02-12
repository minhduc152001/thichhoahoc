import pkg from "mongoose";
import { IUser } from "../../types/interfaces";
import UserSchema from "../schemas/user.schema";
const { model } = pkg;

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
