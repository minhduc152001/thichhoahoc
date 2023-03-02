import { Schema } from "mongoose";
import { IParticipationCourse } from "../../types/interfaces";

const ParticipationCourseSchema = new Schema<IParticipationCourse>(
  {
    courseId: { type: Schema.Types.ObjectId as any, ref: 'Course' },
    userId: { type: Schema.Types.ObjectId as any, ref: 'User' },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default ParticipationCourseSchema;
