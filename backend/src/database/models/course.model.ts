import pkg from "mongoose";
import { ICourse } from "../../types/interfaces";
import CourseSchema from "../schemas/course.schema";
const { model } = pkg;

const Course = model<ICourse>("Course", CourseSchema);

export default Course;
