import { Request, Response } from "express";
import LessonService from "../services/lesson.service";

export default class LessonCtrl {
  static getAllLessons = async (req: Request, res: Response) => {
    try {
      const lessons = await LessonService.listLessons();
      return res.status(200).json({ lessons });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static addLesson = async (req: Request, res: Response) => {
    try {
      const lesson = await LessonService.addLesson(req.body);
      return res.status(200).json({ lesson });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static updateLesson = async (req: Request, res: Response) => {
    try {
      await LessonService.updateLesson(req.body);
      return res
        .status(200)
        .json({ action: "updated lesson", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static getLesson = async (req: Request, res: Response) => {
    try {
      const lesson = await LessonService.getLessonById(req.params.lessonId);
      return res.status(200).json({ lesson });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static deleteLessonById = async (req: Request, res: Response) => {
    try {
      await LessonService.removeLesson(req.params.lessonId);
      return res
        .status(200)
        .json({ action: "delete lesson", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
