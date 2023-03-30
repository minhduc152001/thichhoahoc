import { Schema } from "mongoose";
import { IParticipationCourse } from "../../types/interfaces";

const ParticipationCourseSchema = new Schema<IParticipationCourse>(
  {
    courseId: { type: Schema.Types.ObjectId as any, ref: "Course" },
    userId: { type: Schema.Types.ObjectId as any, ref: "User" },
    completedLessons: [{ type: Schema.Types.ObjectId as any, ref: "Lesson" }],
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

export default ParticipationCourseSchema;
