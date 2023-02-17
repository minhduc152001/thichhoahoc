import pkg from "mongoose";
import { IParticipationCourse } from "../../types/interfaces";
import ParticipationCourseSchema from "../schemas/participationCourse.schema";
const { model } = pkg;

const ParticipationCourse = model<IParticipationCourse>(
  "ParticipationCourse",
  ParticipationCourseSchema
);

export default ParticipationCourse;
