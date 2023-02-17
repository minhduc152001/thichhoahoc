import pkg from "mongoose";
import { IRiddle } from "../../types/interfaces";
import RiddleSchema from "../schemas/riddle.schema";
const { model } = pkg;

const Riddle = model<IRiddle>("Riddle", RiddleSchema);

export default Riddle;
