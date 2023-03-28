import { EGradeLevel } from "../constants/enumTypes";
import Course from "../database/models/course.model";
import ParticipationCourse from "../database/models/participationCourse.model";
import { ICourse } from "../types/interfaces";

export default class CourseService {
  static listCourses = async () => {
    const courses = await Course.find().populate("lessons").exec();
    return courses;
  };

  static listCoursesByGrade = async (gradeLevel: EGradeLevel) => {
    const courses = await Course.find({ gradeLevel });
    return courses;
  };

  static getCourseById = async (id: string) => {
    const course = await Course.findById(id).populate("lessons").exec();
    return course;
  };

  static addCourse = async (courseArgs: ICourse) => {
    const [course] = await Course.insertMany([courseArgs]);
    return course;
  };

  static updateCourse = async (courseArgs: ICourse) => {
    await Course.findOneAndUpdate(
      { _id: courseArgs._id },
      { $set: courseArgs }
    );
    return await Course.findById(courseArgs._id);
  };

  static removeCourse = async (_id: string) => {
    const course = await Course.findByIdAndDelete(_id);
    return `The course ${course?._id} was deleted`;
  };
}
