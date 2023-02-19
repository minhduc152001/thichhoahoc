import { EGradeLevel } from "../constants/enumTypes";
import CourseService from "../services/course.service";
import { ICourse } from "../types/interfaces";

const courseResolvers = {
  listCourses: async (_: undefined, __: undefined) => {
    const courses = await CourseService.listCourses();
    return courses;
  },

  listCoursesByGrade: async (
    _: undefined,
    args: { gradeLevel: EGradeLevel }
  ) => {
    const courses = await CourseService.listCoursesByGrade(args.gradeLevel);
    return courses;
  },

  getCourseById: async (_: undefined, args: { _id: string }) => {
    const course = await CourseService.getCourseById(args._id);
    return course;
  },

  addCourse: async (_: undefined, args: { course: ICourse }) => {
    const course = await CourseService.addCourse(args.course);
    return course;
  },

  updateCourse: async (_: undefined, args: { course: ICourse }) => {
    const course = await CourseService.updateCourse(args.course);
    return course;
  },

  removeCourse: async (_: undefined, args: { _id: string }) => {
    return CourseService.removeCourse(args._id);
  },
};

export default courseResolvers;
