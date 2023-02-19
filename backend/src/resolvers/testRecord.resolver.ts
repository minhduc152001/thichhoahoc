import TestRecordService from "../services/testRecord.service";
import { ITestRecord } from "../types/interfaces";

const testRecordResolvers = {
  getTestRecordById: async (_: undefined, args: { _id: string }) => {
    const testRecord = await TestRecordService.getTestRecordById(args._id);
    return testRecord;
  },

  addTestRecord: async (_: undefined, args: { testRecord: ITestRecord }) => {
    const testRecord = await TestRecordService.addTestRecord(args.testRecord);
    return testRecord;
  },

  updateTestRecord: async (_: undefined, args: { testRecord: ITestRecord }) => {
    const testRecord = await TestRecordService.updateTestRecord(args.testRecord);
    return testRecord;
  },

  removeTestRecord: async (_: undefined, args: { _id: string }) => {
    return TestRecordService.removeTestRecord(args._id);
  },
};

export default testRecordResolvers;
