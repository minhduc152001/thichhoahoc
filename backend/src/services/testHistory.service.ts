import TestHistory from "../database/models/testHistory.model";
import { ITestHistory } from "../types/interfaces";

export default class TestHistoryService {
  static getTestHistoryById = async (id: string) => {
    const testHistory = await TestHistory.findById(id);
    return testHistory;
  };

  static addTestHistory = async (testHistoryArgs: ITestHistory) => {
    const [testHistory] = await TestHistory.insertMany([testHistoryArgs]);
    return testHistory;
  };

  static updateTestHistory = async (testHistoryArgs: ITestHistory) => {
    await TestHistory.findOneAndUpdate(
      { _id: testHistoryArgs._id },
      { $set: testHistoryArgs }
    );
    return await TestHistory.findById(testHistoryArgs._id);
  };

  static removeTestHistory = async (_id: string) => {
    const testHistory = await TestHistory.findByIdAndDelete(_id);
    return `The testHistory ${testHistory?._id} was deleted`;
  };
}
