import { EGradeLevel } from "../constants/enumTypes";
import Course from "../database/models/course.model";
import ParticipationCourse from "../database/models/participationCourse.model";
import { ICourse } from "../types/interfaces";
import { generateSlug } from "../utils/generateSlug";

export default class CourseService {
  static listCourses = async () => {
    const courses = await Course.find().populate("lessons").exec();
    return courses;
  };

  static getCoursesAndCompletion = async (userId: string) => {
    const courses = await Course.find().populate("lessons").exec();

    const completion = await Promise.all(
      courses
        .filter((course) => (course.lessons as any)?.length > 0)
        .map(async (course) => {
          return {
            course,
            completedLessons:
              (
                await ParticipationCourse.findOne({
                  userId,
                  courseId: course._id,
                }).select("completedLessons")
              )?.completedLessons || [],
          };
        })
    );
    return completion;
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
    await this.updateSlug();
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

  static updateSlug = async () => {
    const documents = await Course.find({});
    const updates = documents.map((doc) => ({
      updateOne: {
        filter: { _id: doc._id },
        update: { $set: { slug: generateSlug(doc.name as string) } },
      },
    }));

    await Course.bulkWrite(updates);
    console.log("slug ok");
  };
}
