import { Request, Response } from "express";
import ParticipationCourse from "../services/participationCourse.service";

export default class ParticipationCourseCtrl {
  static getCompletedLessonsInCourse = async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.params;
      const completedLessons =
        await ParticipationCourse.getCompletedLessonsInCourse({
          userId,
          courseId,
        });
      return res.status(200).json({ completedLessons });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static addParticipationCourse = async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.params;
      const record = await ParticipationCourse.addParticipationCourse({
        userId,
        courseId,
      });
      return res.status(200).json({ record });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static updateParticipationCourse = async (req: Request, res: Response) => {
    try {
      const updatedRecord = await ParticipationCourse.updateParticipationCourse(
        {
          courseId: req.params.courseId,
          userId: req.params.userId,
          ...req.body,
        }
      );
      return res.status(200).json({ updatedRecord });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
