import { EGradeLevel } from "../constants/enumTypes";
import MockTestService from "../services/mockTest.service";
import { IMockTest } from "../types/interfaces";

const mockTestResolvers = {
  listTestsByGrade: async (_: undefined, args: { gradeLevel: EGradeLevel }) => {
    const tests = await MockTestService.listTestsByGrade(args.gradeLevel);
    return tests;
  },

  getMockTestById: async (_: undefined, args: { _id: string }) => {
    const mockTest = await MockTestService.getMockTestById(args._id);
    return mockTest;
  },

  addMockTest: async (_: undefined, args: { mockTest: IMockTest }) => {
    const mockTest = await MockTestService.addMockTest(args.mockTest);
    return mockTest;
  },

  updateMockTest: async (_: undefined, args: { mockTest: IMockTest }) => {
    const mockTest = await MockTestService.updateMockTest(args.mockTest);
    return mockTest;
  },

  removeMockTest: async (_: undefined, args: { _id: string }) => {
    return MockTestService.removeMockTest(args._id);
  },
};

export default mockTestResolvers;
