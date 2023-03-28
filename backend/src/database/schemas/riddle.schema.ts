import { Schema } from "mongoose";
import { IRiddle } from "../../types/interfaces";

const RiddleSchema = new Schema<IRiddle>(
  {
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    hint: { type: String, required: false },
    correctAnswer: { type: [String], required: true },
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

export default RiddleSchema;
