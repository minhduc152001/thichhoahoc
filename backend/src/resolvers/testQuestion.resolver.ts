import TestQuestionService from "../services/testQuestion.service";
import { ITestQuestion } from "../types/interfaces";

const testQuestionResolvers = {
  getTestQuestionById: async (_: undefined, args: { _id: string }) => {
    const testQuestion = await TestQuestionService.getTestQuestionById(args._id);
    return testQuestion;
  },

  addTestQuestion: async (_: undefined, args: { testQuestion: ITestQuestion }) => {
    const testQuestion = await TestQuestionService.addTestQuestion(args.testQuestion);
    return testQuestion;
  },

  updateTestQuestion: async (_: undefined, args: { testQuestion: ITestQuestion }) => {
    const testQuestion = await TestQuestionService.updateTestQuestion(args.testQuestion);
    return testQuestion;
  },

  removeTestQuestion: async (_: undefined, args: { _id: string }) => {
    return TestQuestionService.removeTestQuestion(args._id);
  },
};

export default testQuestionResolvers;
