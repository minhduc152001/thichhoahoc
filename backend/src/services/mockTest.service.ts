import { EGradeLevel } from "../constants/enumTypes";
import MockTest from "../database/models/mockTest.model";
import { IMockTest } from "../types/interfaces";

export default class MockTestService {
  static listTestsByGrade = async (gradeLevel: EGradeLevel) => {
    const tests = await MockTest.find({ gradeLevel });
    return tests;
  };

  static getMockTestById = async (id: string) => {
    const mockTest = await MockTest.findById(id);
    return mockTest;
  };

  static addMockTest = async (mockTestArgs: IMockTest) => {
    const [mockTest] = await MockTest.insertMany([mockTestArgs]);
    return mockTest;
  };

  static updateMockTest = async (mockTestArgs: IMockTest) => {
    await MockTest.findOneAndUpdate(
      { _id: mockTestArgs._id },
      { $set: mockTestArgs }
    );
    return await MockTest.findById(mockTestArgs._id);
  };

  static removeMockTest = async (_id: string) => {
    const mockTest = await MockTest.findByIdAndDelete(_id);
    return `The mockTest ${mockTest?._id} was deleted`;
  };
}
