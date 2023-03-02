import pkg from "mongoose";
import { IQACourse } from "../../types/interfaces";
import QACourseSchema from "../schemas/QACourse.schema";
const { model } = pkg;

const QACourse = model<IQACourse>("QACourse", QACourseSchema);

export default QACourse;
