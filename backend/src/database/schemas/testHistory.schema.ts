import { Schema } from "mongoose";
import { ITestHistory } from "../../types/interfaces";

const ITestHistorySchema = new Schema<ITestHistory>(
  {
    mockTestId: { type: Schema.Types.ObjectId as any, ref: "MockTest" },
    userId: { type: Schema.Types.ObjectId as any, ref: "User" },
    attemptsCount: { type: Number, required: true, default: 1 },
    highestScore: { type: Number, required: true, default: 0 },
    doneTime: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: false }
);

export default ITestHistorySchema;
