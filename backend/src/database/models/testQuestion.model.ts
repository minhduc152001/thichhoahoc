import pkg from "mongoose";
import { ITestQuestion } from "../../types/interfaces";
import TestQuestionSchema from "../schemas/testQuestion.schema";
const { model } = pkg;

const TestQuestion = model<ITestQuestion>("TestQuestion", TestQuestionSchema);

export default TestQuestion;
