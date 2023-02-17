import { Schema } from "mongoose";
import { ICourse } from "../../types/interfaces";

const CourseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    buyersCount: { type: Number, required: true, default: 0 },
    gradeLevel: {
      type: String,
      enum: ["10", "11", "12", "college prep"],
      required: true,
    },
  },
  { timestamps: true }
);

export default CourseSchema;
