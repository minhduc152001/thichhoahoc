import Course from "../database/models/course.model";
import ParticipationCourse from "../database/models/participationCourse.model";
import { IParticipationCourse } from "../types/interfaces";

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

  static addParticipationCourse = async (
    participationCourseArgs: IParticipationCourse
  ) => {
    const participationCourse = new ParticipationCourse(
      participationCourseArgs
    );
    participationCourse.save().then(async (record) => {
      await Course.findByIdAndUpdate(
        record.courseId,
        {
          $push: { students: record.userId },
        },
        { new: true }
      );
    });
    return participationCourse;
  };

  static updateParticipationCourse = async (
    participationCourseArgs: IParticipationCourse
  ) => {
    await ParticipationCourse.findOneAndUpdate(
      { _id: participationCourseArgs._id },
      { $set: participationCourseArgs }
    );
    return await ParticipationCourse.findById(participationCourseArgs._id);
  };

  static removeParticipationCourse = async (_id: string) => {
    const participationCourse = await ParticipationCourse.findByIdAndDelete(
      _id
    );
    return `The participation course ${participationCourse?._id} was deleted`;
  };
}
