import TestRecord from "../database/models/testRecord.model";
import { ITestRecord } from "../types/interfaces";

export default class TestRecordService {
  static getTestRecordById = async (id: string) => {
    const testRecord = await TestRecord.findById(id);
    return testRecord;
  };

  static addTestRecord = async (testRecordArgs: ITestRecord) => {
    const [testRecord] = await TestRecord.insertMany([testRecordArgs]);
    return testRecord;
  };

  static updateTestRecord = async (testRecordArgs: ITestRecord) => {
    await TestRecord.findOneAndUpdate(
      { _id: testRecordArgs._id },
      { $set: testRecordArgs }
    );
    return await TestRecord.findById(testRecordArgs._id);
  };

  static removeTestRecord = async (_id: string) => {
    const testRecord = await TestRecord.findByIdAndDelete(_id);
    return `The testRecord ${testRecord?._id} was deleted`;
  };
}