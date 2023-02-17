import { Schema } from "mongoose";
import { ITestRecord } from "../../types/interfaces";
import { ECorrectAnswer } from "../../constants/enumTypes";

const ITestRecordSchema = new Schema<ITestRecord>(
  {
    testQuestionId: { type: String, required: true },
    userId: { type: String, required: true },
    answer: { type: String, enum: ECorrectAnswer, required: true },
    isCorrect: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default ITestRecordSchema;
