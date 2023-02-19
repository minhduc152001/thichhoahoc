import ParticipationCourseService from "../services/participationCourse.service";
import { IParticipationCourse } from "../types/interfaces";

const participationCourseResolvers = {
  getParticipationCourseById: async (_: undefined, args: { _id: string }) => {
    const participationCourse = await ParticipationCourseService.getParticipationCourseById(args._id);
    return participationCourse;
  },

  addParticipationCourse: async (_: undefined, args: { participationCourse: IParticipationCourse }) => {
    const participationCourse = await ParticipationCourseService.addParticipationCourse(args.participationCourse);
    return participationCourse;
  },

  updateParticipationCourse: async (_: undefined, args: { participationCourse: IParticipationCourse }) => {
    const participationCourse = await ParticipationCourseService.updateParticipationCourse(args.participationCourse);
    return participationCourse;
  },

  removeParticipationCourse: async (_: undefined, args: { _id: string }) => {
    return ParticipationCourseService.removeParticipationCourse(args._id);
  },
};

export default participationCourseResolvers;
