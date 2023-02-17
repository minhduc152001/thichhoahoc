import { Schema } from "mongoose";
import { ITestQuestion } from "../../types/interfaces";
import { ECorrectAnswer } from "../../constants/enumTypes";

const TestQuestionSchema = new Schema<ITestQuestion>(
  {
    mockTestId: { type: String, required: true },
    question: { type: String, required: true },
    hint: { type: String, required: false },
    optionA: { type: String, required: true },
    optionB: { type: String, required: true },
    optionC: { type: String, required: true },
    optionD: { type: String, required: true },
    correctAnswer: { type: String, enum: ECorrectAnswer, required: false },
    explaination: { type: String, required: true },
  },
  { timestamps: true }
);

export default TestQuestionSchema;
