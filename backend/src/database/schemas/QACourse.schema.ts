import { Schema } from "mongoose";
import { IQACourse } from "../../types/interfaces";

const QACourseSchema = new Schema<IQACourse>(
  {
    userId: { type: Schema.Types.ObjectId as any, ref: "User" },
    courseId: { type: Schema.Types.ObjectId as any, ref: "Course" },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        // delete ret._id
      },
    },
  }
);

export default QACourseSchema;
