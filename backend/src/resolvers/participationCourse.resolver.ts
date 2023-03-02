import ParticipationCourseService from "../services/participationCourse.service";
import { IContext, IParticipationCourse } from "../types/interfaces";

const participationCourseResolvers = {
  listCourseIdsUserGot: async (
    _: undefined,
    __: undefined,
    context: IContext
  ) => {
    const courseIds = await ParticipationCourseService.listCourseIdsUserGot(
      context.profile._id
    );
    return courseIds;
  },

  getParticipationCourseById: async (_: undefined, args: { _id: string }) => {
    const participationCourse =
      await ParticipationCourseService.getParticipationCourseById(args._id);
    return participationCourse;
  },

  addParticipationCourse: async (
    _: undefined,
    args: { participationCourse: IParticipationCourse },
    context: IContext
  ) => {
    const participationCourse =
      await ParticipationCourseService.addParticipationCourse({
        courseId: args.participationCourse.courseId,
        userId: context.profile._id,
      } as any);
    return participationCourse;
  },

  updateParticipationCourse: async (
    _: undefined,
    args: { participationCourse: IParticipationCourse }
  ) => {
    const participationCourse =
      await ParticipationCourseService.updateParticipationCourse(
        args.participationCourse
      );
    return participationCourse;
  },

  removeParticipationCourse: async (_: undefined, args: { _id: string }) => {
    return ParticipationCourseService.removeParticipationCourse(args._id);
  },
};

export default participationCourseResolvers;
