import RiddleAttemptService from "../services/riddleAttempt.service";
import { IRiddleAttempt } from "../types/interfaces";

const riddleAttemptResolvers = {
  getRiddleAttemptById: async (_: undefined, args: { _id: string }) => {
    const riddleAttempt = await RiddleAttemptService.getRiddleAttemptById(args._id);
    return riddleAttempt;
  },

  addRiddleAttempt: async (_: undefined, args: { riddleAttempt: IRiddleAttempt }) => {
    const riddleAttempt = await RiddleAttemptService.addRiddleAttempt(args.riddleAttempt);
    return riddleAttempt;
  },

  updateRiddleAttempt: async (_: undefined, args: { riddleAttempt: IRiddleAttempt }) => {
    const riddleAttempt = await RiddleAttemptService.updateRiddleAttempt(args.riddleAttempt);
    return riddleAttempt;
  },

  removeRiddleAttempt: async (_: undefined, args: { _id: string }) => {
    return RiddleAttemptService.removeRiddleAttempt(args._id);
  },
};

export default riddleAttemptResolvers;
