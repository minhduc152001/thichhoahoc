import { Schema } from "mongoose";
import { ICourse } from "../../types/interfaces";

const CourseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    author: { type: String, required: true },
    isFree: { type: Boolean, required: true },
    img: { type: String, required: true },
    buyersCount: { type: Number, required: true, default: 0 },
    gradeLevel: {
      type: String,
      enum: ["G10", "G11", "G12", "collegePrep"],
      required: true,
    },
  },
  { timestamps: true }
);

export default CourseSchema;
