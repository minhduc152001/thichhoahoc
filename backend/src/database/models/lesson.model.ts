import pkg from "mongoose";
import { ILesson } from "../../types/interfaces";
import LessonSchema from "../schemas/lesson.schema";
const { model } = pkg;

const Lesson = model<ILesson>("Lesson", LessonSchema);

export default Lesson;
