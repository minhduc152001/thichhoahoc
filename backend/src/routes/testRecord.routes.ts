import { Application } from "express";
import TestRecordCtrl from "../controllers/testRecord.ctrl";

export default (app: Application) => {
  app.post("/api/test-record", TestRecordCtrl.addTestRecords);
};
