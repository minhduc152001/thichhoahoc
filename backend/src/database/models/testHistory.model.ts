import pkg from "mongoose";
import { ITestHistory } from "../../types/interfaces";
import TestHistorySchema from "../schemas/testHistory.schema";
const { model } = pkg;

const TestHistory = model<ITestHistory>("TestHistory", TestHistorySchema);

export default TestHistory;
