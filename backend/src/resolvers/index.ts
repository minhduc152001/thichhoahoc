import courseResolvers from "./course.resolver";
import documentResolvers from "./document.resolver";
import lessonResolvers from "./lesson.resolver";
import mockTestResolvers from "./mockTest.resolver";
import participationCourseResolvers from "./participationCourse.resolver";
import riddleResolvers from "./riddle.resolver";
import riddleAttemptResolvers from "./riddleAttempt.resolver";
import testHistoryResolvers from "./testHistory.resolver";
import testQuestionResolvers from "./testQuestion.resolver";
import testRecordResolvers from "./testRecord.resolver";
import userResolvers from "./user.resolver";

const resolvers = {
  Query: {
    getUserById: userResolvers.getUserById,
    listCourses: courseResolvers.listCourses,
  },

  Mutation: {
    listCoursesByGrade: courseResolvers.listCoursesByGrade,
    getCourseById: courseResolvers.getCourseById,
    addCourse: courseResolvers.addCourse,
    updateCourse: courseResolvers.updateCourse,
    removeCourse: courseResolvers.removeCourse,

    listLessonsInCourse: lessonResolvers.listLessonsInCourse,
    getLessonById: lessonResolvers.getLessonById,
    addLesson: lessonResolvers.addLesson,
    updateLesson: lessonResolvers.updateLesson,
    removeLesson: lessonResolvers.removeLesson,

    getParticipationCourseById:
      participationCourseResolvers.getParticipationCourseById,
    addParticipationCourse: participationCourseResolvers.addParticipationCourse,
    updateParticipationCourse:
      participationCourseResolvers.updateParticipationCourse,
    removeParticipationCourse:
      participationCourseResolvers.removeParticipationCourse,

    getRiddleById: riddleResolvers.getRiddleById,
    addRiddle: riddleResolvers.addRiddle,
    updateRiddle: riddleResolvers.updateRiddle,
    removeRiddle: riddleResolvers.removeRiddle,

    getRiddleAttemptById: riddleAttemptResolvers.getRiddleAttemptById,
    addRiddleAttempt: riddleAttemptResolvers.addRiddleAttempt,
    updateRiddleAttempt: riddleAttemptResolvers.updateRiddleAttempt,
    removeRiddleAttempt: riddleAttemptResolvers.removeRiddleAttempt,

    listDocsByGrade: documentResolvers.listDocsByGrade,
    getDocumentById: documentResolvers.getDocumentById,
    addDocument: documentResolvers.addDocument,
    updateDocument: documentResolvers.updateDocument,
    removeDocument: documentResolvers.removeDocument,

    listTestsByGrade: mockTestResolvers.listTestsByGrade,
    getMockTestById: mockTestResolvers.getMockTestById,
    addMockTest: mockTestResolvers.addMockTest,
    updateMockTest: mockTestResolvers.updateMockTest,
    removeMockTest: mockTestResolvers.removeMockTest,

    getTestQuestionById: testQuestionResolvers.getTestQuestionById,
    addTestQuestion: testQuestionResolvers.addTestQuestion,
    updateTestQuestion: testQuestionResolvers.updateTestQuestion,
    removeTestQuestion: testQuestionResolvers.removeTestQuestion,

    getTestRecordById: testRecordResolvers.getTestRecordById,
    addTestRecord: testRecordResolvers.addTestRecord,
    updateTestRecord: testRecordResolvers.updateTestRecord,
    removeTestRecord: testRecordResolvers.removeTestRecord,

    getTestHistoryById: testHistoryResolvers.getTestHistoryById,
    addTestHistory: testHistoryResolvers.addTestHistory,
    updateTestHistory: testHistoryResolvers.updateTestHistory,
    removeTestHistory: testHistoryResolvers.removeTestHistory,
  },
};

export default resolvers;
