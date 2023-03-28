import { Application } from "express";
import UserCtrl from "../controllers/user.ctrl";

export default (app: Application) => {
  // SIGN IN/UP
  app.post("/auth/signup", UserCtrl.signup);
  app.post("/auth/login", UserCtrl.login);
  app.get("/api/users", UserCtrl.getAllUsers);
  app.get("/api/user/:userId", UserCtrl.getUser);
  app.put("/api/user/:userId", UserCtrl.updateUser);
  app.delete("/api/user/:userId", UserCtrl.deleteUserById);
};
