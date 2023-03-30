export const user = {
  userId: localStorage.getItem("userId"),
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  subscription: localStorage.getItem("subscription"),
  avatar: localStorage.getItem("avatar"),
  subscriptionExpiresAt: localStorage.getItem("subscriptionExpiresAt"),
};
