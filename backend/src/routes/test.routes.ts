import { Application } from "express";
import TestCtrl from "../controllers/test.ctrl";

export default (app: Application) => {
  app.get("/api/tests", TestCtrl.getAllTests);
  app.get("/api/test/:testId", TestCtrl.getTest);
  app.get("/api/tests/history/:userId", TestCtrl.listTestsWithUserHistory);
  app.post("/api/test", TestCtrl.addTest);
  app.put("/api/test/:testId", TestCtrl.updateTest);
  app.delete("/api/test/:testId", TestCtrl.deleteTestById);
};
