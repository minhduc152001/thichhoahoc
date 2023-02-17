import { Schema } from "mongoose";
import { IRiddle } from "../../types/interfaces";

const RiddleSchema = new Schema<IRiddle>(
  {
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    hint: { type: String, required: false },
    correctAnswer: { type: [String], required: true },
  },
  { timestamps: true }
);

export default RiddleSchema;
