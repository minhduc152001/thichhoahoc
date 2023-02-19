import RiddleAttempt from "../database/models/riddleAttempt.model";
import { IRiddleAttempt } from "../types/interfaces";

export default class RiddleAttemptService {
  static getRiddleAttemptById = async (id: string) => {
    const riddle = await RiddleAttempt.findById(id);
    return riddle;
  };

  static addRiddleAttempt = async (riddleArgs: IRiddleAttempt) => {
    const [riddle] = await RiddleAttempt.insertMany([riddleArgs]);
    return riddle;
  };

  static updateRiddleAttempt = async (riddleArgs: IRiddleAttempt) => {
    await RiddleAttempt.findOneAndUpdate(
      { _id: riddleArgs._id },
      { $set: riddleArgs }
    );
    return await RiddleAttempt.findById(riddleArgs._id);
  };

  static removeRiddleAttempt = async (_id: string) => {
    const riddle = await RiddleAttempt.findByIdAndDelete(_id);
    return `The riddle attempt ${riddle?._id} was deleted`;
  };
}
