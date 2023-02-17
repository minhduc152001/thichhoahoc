import { Schema } from "mongoose";
import { ILesson } from "../../types/interfaces";

const LessonSchema = new Schema<ILesson>(
  {
    courseId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    text: { type: String, required: true },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default LessonSchema;
