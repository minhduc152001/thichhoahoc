import TestHistoryService from "../services/testHistory.service";
import { ITestHistory } from "../types/interfaces";

const testHistoryResolvers = {
  getTestHistoryById: async (_: undefined, args: { _id: string }) => {
    const testHistory = await TestHistoryService.getTestHistoryById(args._id);
    return testHistory;
  },

  addTestHistory: async (_: undefined, args: { testHistory: ITestHistory }) => {
    const testHistory = await TestHistoryService.addTestHistory(args.testHistory);
    return testHistory;
  },

  updateTestHistory: async (_: undefined, args: { testHistory: ITestHistory }) => {
    const testHistory = await TestHistoryService.updateTestHistory(args.testHistory);
    return testHistory;
  },

  removeTestHistory: async (_: undefined, args: { _id: string }) => {
    return TestHistoryService.removeTestHistory(args._id);
  },
};

export default testHistoryResolvers;
