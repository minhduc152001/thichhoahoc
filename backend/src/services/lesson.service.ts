import Course from "../database/models/course.model";
import Lesson from "../database/models/lesson.model";
import { ILesson } from "../types/interfaces";

export default class LessonService {
  static listLessons = async () => {
    const lessons = await Lesson.find();
    return lessons;
  };

  static listLessonsInCourse = async (courseId: string) => {
    const lessons = await Lesson.find({ courseId });
    return lessons;
  };

  static getLessonById = async (id: string) => {
    const course = await Lesson.findById(id);
    return course;
  };

  static addLesson = async (lessonArgs: ILesson) => {
    const [lesson] = await Lesson.insertMany([lessonArgs]);
    await Course.findByIdAndUpdate(
      lessonArgs.courseId,
      {
        $push: { lessons: lesson._id },
      },
      { new: true }
    );
    return lesson;
  };

  static updateLesson = async (lessonArgs: ILesson) => {
    await Lesson.findOneAndUpdate(
      { _id: lessonArgs._id },
      { $set: lessonArgs }
    );
    return await Lesson.findById(lessonArgs._id);
  };

  static removeLesson = async (_id: string) => {
    const lesson = await Lesson.findByIdAndDelete(_id);
    return `The lesson ${lesson?._id} was deleted`;
  };
}
