import { Application } from "express";
import UserCtrl from "../controllers/user.ctrl";

export default (app: Application) => {
  // SIGN IN/UP
  app.post("/auth/signup", UserCtrl.signup);
    app.post("/auth/login", UserCtrl.login);
};
