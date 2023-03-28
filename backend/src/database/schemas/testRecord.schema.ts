import { Schema } from "mongoose";
import { ITestRecord } from "../../types/interfaces";
import { ECorrectAnswer } from "../../constants/enumTypes";

const ITestRecordSchema = new Schema<ITestRecord>(
  {
    testQuestionId: { type: Schema.Types.ObjectId as any, ref: "TestQuestion" },
    userId: { type: Schema.Types.ObjectId as any, ref: "User" },
    answer: { type: String, enum: ECorrectAnswer, required: true },
    isCorrect: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        // delete ret._id
      },
    },
  }
);

export default ITestRecordSchema;
