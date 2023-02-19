import LessonService from "../services/lesson.service";
import { ILesson } from "../types/interfaces";

const lessonResolvers = {
  listLessonsInCourse: async (_: undefined, args: { courseId: string }) => {
    const lessons = await LessonService.listLessonsInCourse(args.courseId);
    return lessons;
  },

  getLessonById: async (_: undefined, args: { _id: string }) => {
    const lesson = await LessonService.getLessonById(args._id);
    return lesson;
  },

  addLesson: async (_: undefined, args: { lesson: ILesson }) => {
    const lesson = await LessonService.addLesson(args.lesson);
    return lesson;
  },

  updateLesson: async (_: undefined, args: { lesson: ILesson }) => {
    const lesson = await LessonService.updateLesson(args.lesson);
    return lesson;
  },

  removeLesson: async (_: undefined, args: { _id: string }) => {
    return LessonService.removeLesson(args._id);
  },
};

export default lessonResolvers;
