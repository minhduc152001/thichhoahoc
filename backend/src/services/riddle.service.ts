import Riddle from "../database/models/riddle.model";
import { IRiddle } from "../types/interfaces";

export default class RiddleService {
  static listRiddles = async () => {
    const riddles = await Riddle.find();
    return riddles;
  };

  static getRiddleById = async (id: string) => {
    const riddle = await Riddle.findById(id);
    return riddle;
  };

  static addRiddle = async (riddleArgs: IRiddle) => {
    const [riddle] = await Riddle.insertMany([riddleArgs]);
    return riddle;
  };

  static updateRiddle = async (riddleArgs: IRiddle) => {
    await Riddle.findOneAndUpdate(
      { _id: riddleArgs._id },
      { $set: riddleArgs }
    );
    return await Riddle.findById(riddleArgs._id);
  };

  static removeRiddle = async (_id: string) => {
    const riddle = await Riddle.findByIdAndDelete(_id);
    return `The riddle ${riddle?._id} was deleted`;
  };
}
