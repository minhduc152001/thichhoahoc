import Course from "../database/models/course.model";
import ParticipationCourse from "../database/models/participationCourse.model";
import { ICourseIdAndUserId, IParticipationCourse } from "../types/interfaces";

export default class ParticipationCourseService {
  static listCourseIdsUserGot = async (userId: string) => {
    const ids = (await ParticipationCourse.find({ userId })).map(
      (id) => id.courseId
    );
    return ids;
  };

  static getParticipationCourseById = async (id: string) => {
    const participationCourse = await ParticipationCourse.findById(id);
    return participationCourse;
  };

  static getCompletedLessonsInCourse = async ({
    userId,
    courseId,
  }: ICourseIdAndUserId) => {
    const completedLessons = await ParticipationCourse.findOne({
      courseId,
      userId,
    });
    return completedLessons;
  };

  static addParticipationCourse = async ({
    courseId,
    userId,
  }: ICourseIdAndUserId) => {
    const recordCounts = await ParticipationCourse.countDocuments({
      courseId,
      userId,
    });
    if (recordCounts > 0) return;
    const participationCourse = new ParticipationCourse({ courseId, userId });
    participationCourse.save().then(async () => {
      await Course.findByIdAndUpdate(
        courseId,
        {
          $push: { students: userId },
        },
        { new: true }
      );
    });
    return participationCourse;
  };

  static updateParticipationCourse = async (
    participationCourseArgs: IParticipationCourse
  ) => {
    const { newCompletedLessonId, isCompleted } = participationCourseArgs;
    const recordCounts = await ParticipationCourse.countDocuments({
      completedLessons: {
        $in: [newCompletedLessonId],
      },
    });
    
    if (recordCounts === 0) {
      const filter = {
        userId: participationCourseArgs.userId,
        courseId: participationCourseArgs.courseId,
      };
      const update: any = {};
      if (newCompletedLessonId) {
        update.$push = {
          completedLessons: newCompletedLessonId,
        };
      }
      if (isCompleted) {
        update.$set = {
          isCompleted,
        };
      }
      await ParticipationCourse.findOneAndUpdate(filter, update);
    }

    return await ParticipationCourse.findById(participationCourseArgs._id);
  };

  static removeParticipationCourse = async (_id: string) => {
    const participationCourse = await ParticipationCourse.findByIdAndDelete(
      _id
    );
    return `The participation course ${participationCourse?._id} was deleted`;
  };
}
