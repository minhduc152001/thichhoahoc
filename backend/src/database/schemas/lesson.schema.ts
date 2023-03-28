import { Schema } from "mongoose";
import { ILesson } from "../../types/interfaces";

const LessonSchema = new Schema<ILesson>(
  {
    courseId: { type: Schema.Types.ObjectId as any, ref: "Course" },
    name: { type: String, required: true },
    description: { type: String, required: false },
    text: { type: String, required: true },
    videoUrl: {
      type: String,
      required: true,
    },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        // delete ret._id
      },
    },
  }
);

export default LessonSchema;
