import RiddleService from "../services/riddle.service";
import { IRiddle } from "../types/interfaces";

const riddleResolvers = {
  getRiddleById: async (_: undefined, args: { _id: string }) => {
    const riddle = await RiddleService.getRiddleById(args._id);
    return riddle;
  },

  addRiddle: async (_: undefined, args: { riddle: IRiddle }) => {
    const riddle = await RiddleService.addRiddle(args.riddle);
    return riddle;
  },

  updateRiddle: async (_: undefined, args: { riddle: IRiddle }) => {
    const riddle = await RiddleService.updateRiddle(args.riddle);
    return riddle;
  },

  removeRiddle: async (_: undefined, args: { _id: string }) => {
    return RiddleService.removeRiddle(args._id);
  },
};

export default riddleResolvers;
