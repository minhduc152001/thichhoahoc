export const user = {
  userId: localStorage.getItem("userId"),
  email: localStorage.getItem("email"),
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  subscription: localStorage.getItem("subscription"),
  avatar: localStorage.getItem("avatar"),
  subscriptionExpiresAt: localStorage.getItem("subscriptionExpiresAt"),
};

export const updateProfileUser = ({
  avatar,
  firstName,
  lastName,
  subscription,
  subscriptionExpiresAt,
}) => {
  if (subscription) {
    localStorage.setItem("subscription", subscription);
  }
  if (avatar) {
    localStorage.setItem("avatar", avatar);
  }
  if (firstName) {
    localStorage.setItem("firstName", firstName);
  }
  if (lastName) {
    localStorage.setItem("lastName", lastName);
  }
  if (subscriptionExpiresAt || subscriptionExpiresAt === null) {
    localStorage.setItem("subscriptionExpiresAt", subscriptionExpiresAt);
  }
};
