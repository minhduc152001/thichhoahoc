import { Schema } from "mongoose";
import { IParticipationCourse } from "../../types/interfaces";

const ParticipationCourseSchema = new Schema<IParticipationCourse>(
  {
    courseId: { type: Schema.Types.ObjectId as any, ref: "Course" },
    userId: { type: Schema.Types.ObjectId as any, ref: "User" },
    isCompleted: { type: Boolean, default: false },
    completedLessons: { type: [String], default: [] },
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
