import UserService from "../services/user.service";
import { IContext } from "../types/interfaces";

const userResolvers = {
  getUserById: async (_: undefined, __: undefined, context: IContext) => {
    const user = await UserService.getUserById(context.profile._id);
    return user;
  },
};

export default userResolvers;
