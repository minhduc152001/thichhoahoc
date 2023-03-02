import UserService from "../services/user.service";
import { IContext, IUser } from "../types/interfaces";

const userResolvers = {
  getUserById: async (_: undefined, __: undefined, context: IContext) => {
    const user = await UserService.getUserById(context.profile._id);
    return user;
  },

  updateUser: async (
    _: undefined,
    args: { profile: IUser },
    context: IContext
  ) => {
    const user = await UserService.updateUser({
      _id: context.profile._id,
      ...args.profile,
    });
    return user;
  },
};

export default userResolvers;
