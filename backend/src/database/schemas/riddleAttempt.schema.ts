import { Schema } from "mongoose";
import { IRiddleAttempt } from "../../types/interfaces";

const IRiddleAttemptSchema = new Schema<IRiddleAttempt>(
  {
    userId: { type: String, required: true },
    riddleId: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default IRiddleAttemptSchema;
