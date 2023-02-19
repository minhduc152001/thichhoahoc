import { Schema } from "mongoose";
import { IParticipationCourse } from "../../types/interfaces";

const ParticipationCourseSchema = new Schema<IParticipationCourse>(
  {
    courseId: { type: String, required: true },
    userId: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default ParticipationCourseSchema;
