import { Schema } from "mongoose";
import { ITestQuestion } from "../../types/interfaces";
import { ECorrectAnswer } from "../../constants/enumTypes";

const TestQuestionSchema = new Schema<ITestQuestion>(
  {
    mockTestId: { type: Schema.Types.ObjectId as any, ref: "MockTest" },
    question: { type: String, required: true },
    hint: { type: String, required: false },
    score: { type: Number, required: true },
    optionA: { type: String, required: true },
    optionB: { type: String, required: true },
    optionC: { type: String, required: true },
    optionD: { type: String, required: true },
    correctAnswer: { type: String, enum: ECorrectAnswer, required: false },
    explaination: { type: String, required: true },
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

export default TestQuestionSchema;
