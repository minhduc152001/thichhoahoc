import pkg from "mongoose";
import { ITestRecord } from "../../types/interfaces";
import TestRecordSchema from "../schemas/testRecord.schema";
const { model } = pkg;

const TestRecord = model<ITestRecord>(
  "TestRecord",
  TestRecordSchema
);

export default TestRecord;
