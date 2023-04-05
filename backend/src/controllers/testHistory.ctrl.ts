import { Request, Response } from "express";
import TestHistoryService from "../services/testHistory.service";

export default class TestHistoryCtrl {
  static getAllTestsHistory = async (req: Request, res: Response) => {
    try {
      const history = await TestHistoryService.getAllTestsHistoryByUserId(
        req.params.userId
      );
      return res.status(200).json({ history });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static upsertTestHistory = async (req: Request, res: Response) => {
    try {
      const history = await TestHistoryService.upsertTestHistory(req.body);
      return res.status(200).json({ history });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
