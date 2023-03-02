import { Schema } from "mongoose";
import { IRiddleAttempt } from "../../types/interfaces";

const IRiddleAttemptSchema = new Schema<IRiddleAttempt>(
  {
    userId: { type: Schema.Types.ObjectId as any, ref: "User" },
    riddleId: { type: Schema.Types.ObjectId as any, ref: "Riddle" },
    isCorrect: { type: Boolean },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

export default IRiddleAttemptSchema;
