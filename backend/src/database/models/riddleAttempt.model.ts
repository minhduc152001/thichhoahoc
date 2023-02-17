import pkg from "mongoose";
import { IRiddleAttempt } from "../../types/interfaces";
import RiddleAttemptSchema from "../schemas/riddleAttempt.schema";
const { model } = pkg;

const RiddleAttempt = model<IRiddleAttempt>(
  "RiddleAttempt",
  RiddleAttemptSchema
);

export default RiddleAttempt;
