import { Request, Response } from "express";
import TestService from "../services/test.service";

export default class TestCtrl {
  static getAllTests = async (req: Request, res: Response) => {
    try {
      const tests = await TestService.listTests();
      return res.status(200).json({ tests });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static addTest = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const scorePerQuestion = data.score;
      data.questions = data.questions.map((q: any) => {
        return { ...q, score: scorePerQuestion };
      });
      const test = await TestService.addTest(data);
      return res.status(200).json({ test });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static updateTest = async (req: Request, res: Response) => {
    try {
      await TestService.updateTest(req.body);
      return res
        .status(200)
        .json({ action: "updated test", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static getTest = async (req: Request, res: Response) => {
    try {
      const test = await TestService.getTestById(req.params.testId);
      return res.status(200).json({ test });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static deleteTestById = async (req: Request, res: Response) => {
    try {
      await TestService.removeTest(req.params.testId);
      return res
        .status(200)
        .json({ action: "deleted test", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
