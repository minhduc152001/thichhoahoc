import TestQuestion from "../database/models/testQuestion.model";
import { ITestQuestion } from "../types/interfaces";

export default class TestQuestionService {
  static getTestQuestionById = async (id: string) => {
    const testQuestion = await TestQuestion.findById(id);
    return testQuestion;
  };

  static addTestQuestion = async (testQuestionArgs: ITestQuestion) => {
    const [testQuestion] = await TestQuestion.insertMany([testQuestionArgs]);
    return testQuestion;
  };

  static updateTestQuestion = async (testQuestionArgs: ITestQuestion) => {
    await TestQuestion.findOneAndUpdate(
      { _id: testQuestionArgs._id },
      { $set: testQuestionArgs }
    );
    return await TestQuestion.findById(testQuestionArgs._id);
  };

  static removeTestQuestion = async (_id: string) => {
    const testQuestion = await TestQuestion.findByIdAndDelete(_id);
    return `The testQuestion ${testQuestion?._id} was deleted`;
  };
}
