import userResolvers from "./user.resolver";

const resolvers = {
  Query: {
    getUserById: userResolvers.getUserById
  },
};

export default resolvers;
