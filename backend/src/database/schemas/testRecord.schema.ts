import { Schema } from "mongoose";
import { ITestRecord } from "../../types/interfaces";
import { ECorrectAnswer } from "../../constants/enumTypes";

const ITestRecordSchema = new Schema<ITestRecord>(
  {
    testQuestionId: { type: Schema.Types.ObjectId as any, ref: 'TestQuestion' },
    userId: { type: Schema.Types.ObjectId as any, ref: 'User' },
    answer: { type: String, enum: ECorrectAnswer, required: true },
    isCorrect: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default ITestRecordSchema;
