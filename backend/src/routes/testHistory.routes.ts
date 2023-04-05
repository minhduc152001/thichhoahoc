import { Application } from "express";
import TestHistoryCtl from "../controllers/testHistory.ctrl";

export default (app: Application) => {
  app.post("/api/test-history", TestHistoryCtl.upsertTestHistory);
};
