import { Application } from "express";
import healthRoutes from "./health.routes";
import userRoutes from "./user.routes";

export default (app: Application) => {
  healthRoutes(app);
  userRoutes(app);
};
