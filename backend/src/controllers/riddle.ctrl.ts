import { Request, Response } from "express";
import RiddleService from "../services/riddle.service";

export default class LessonCtrl {
  static listRiddles = async (req: Request, res: Response) => {
    try {
      const riddles = await RiddleService.listRiddles();
      return res.status(200).json({ riddles });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static addRiddle = async (req: Request, res: Response) => {
    try {
      const riddle = await RiddleService.addRiddle(req.body);
      return res.status(200).json({ riddle });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static getRiddle = async (req: Request, res: Response) => {
    try {
      const riddle = await RiddleService.getRiddleById(req.params.riddleId);
      return res.status(200).json({ riddle });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static updateRiddle = async (req: Request, res: Response) => {
    try {
      await RiddleService.updateRiddle(req.body);
      return res
        .status(200)
        .json({ action: "updated lesson", status: "success" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static deleteRiddle = async (req: Request, res: Response) => {
    try {
      await RiddleService.removeRiddle(req.params.riddleId);
      return res
        .status(200)
        .json({ action: "deleted riddle", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
