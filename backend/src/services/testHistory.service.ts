import MockTest from "../database/models/mockTest.model";
import TestHistory from "../database/models/testHistory.model";
import { ITestHistory } from "../types/interfaces";

export default class TestHistoryService {
  static getAllTestsHistoryByUserId = async (userId: string) => {
    const history = await TestHistory.find({
      userId,
    });
    return history;
  };
  static getTestHistoryById = async (id: string) => {
    const testHistory = await TestHistory.findById(id);
    return testHistory;
  };

  static upsertTestHistory = async (testHistoryArgs: ITestHistory) => {
    const { userId, mockTestId, doneTime, highestScore } = testHistoryArgs;
    const curruntTestHistory = await TestHistory.findOne({
      userId,
      mockTestId,
    });
    const getTheHighestScore = Math.max(
      curruntTestHistory?.highestScore || -Infinity,
      highestScore as any
    );

    const testHistory = await TestHistory.findOneAndUpdate(
      {
        userId,
        mockTestId,
      },
      {
        $set: { doneTime, highestScore: getTheHighestScore },
        $inc: { attemptsCount: 1 },
      },
      {
        upsert: true,
        new: true,
      }
    );

    await MockTest.findByIdAndUpdate(mockTestId, {
      $inc: { takenCount: 1 },
    });
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
