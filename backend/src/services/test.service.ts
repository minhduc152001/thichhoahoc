import { EGradeLevel } from "../constants/enumTypes";
import Test from "../database/models/mockTest.model";
import TestHistory from "../database/models/testHistory.model";
import TestQuestion from "../database/models/testQuestion.model";
import { IMockTest } from "../types/interfaces";

export default class TestService {
  static listTests = async () => {
    const tests = await Test.find().populate("questions").exec();
    return tests;
  };

  static listTestsWithUserHistory = async (userId: string) => {
    const tests = await Test.find();

    const testsAndHistory = await Promise.all(
      tests.map(async (test) => {
        return {
          test,
          history: (await TestHistory.findOne({
            mockTestId: test._id,
            userId,
          }).select("attemptsCount highestScore doneTime")) || {
            attemptsCount: 0,
            highestScore: 0,
            doneTime: 0,
          },
        };
      })
    );

    return testsAndHistory;
  };

  static listTestsByGrade = async (gradeLevel: EGradeLevel) => {
    const tests = await Test.find({ gradeLevel });
    return tests;
  };

  static getTestById = async (id: string) => {
    const test = await Test.findById(id).populate("questions").exec();
    return test;
  };

  static addTest = async (testArgs: IMockTest) => {
    const { name, gradeLevel, totalTime, questions } = testArgs;
    const test = new Test({
      gradeLevel,
      totalTime,
      name,
    });

    test.save((err, newTest) => {
      if (err) {
        // handle error
      } else {
        questions?.map((question) => {
          const newQuestion = new TestQuestion(question);
          newQuestion.save().then((el) =>
            Test.findByIdAndUpdate(
              newTest?._id,
              {
                $push: { questions: el._id },
              },
              { new: true }
            )
          );
        });
      }
    });
    return test;
  };

  static updateTest = async (testArgs: IMockTest) => {
    await Test.findOneAndUpdate({ _id: testArgs._id }, { $set: testArgs });
    return await Test.findById(testArgs._id);
  };

  static removeTest = async (_id: string) => {
    const test = await Test.findByIdAndDelete(_id);
    return `The test ${test?._id} was deleted`;
  };
}
