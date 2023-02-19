import { Schema } from "mongoose";
import { IMockTest } from "../../types/interfaces";

const MockTestSchema = new Schema<IMockTest>(
  {
    name: { type: String, required: true },
    totalTime: { type: Number, required: true },
    takenCount: { type: Number, default: 0 },
    userTakenTimes: { type: Number, default: 0 },
    gradeLevel: {
      type: String,
      enum: ["G10", "G11", "G12", "collegePrep"],
      required: true,
    },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: false }
);

export default MockTestSchema;
