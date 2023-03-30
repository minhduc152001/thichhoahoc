import { Request, Response } from "express";
import CourseService from "../services/course.service";

export default class CourseCtrl {
  static getAllCourses = async (req: Request, res: Response) => {
    try {
      const courses = await CourseService.listCourses();
      return res.status(200).json({ courses });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static getCoursesAndCompletion = async (req: Request, res: Response) => {
    try {
      const coursesAndCompletion = await CourseService.getCoursesAndCompletion(
        req.params.userId
      );
      return res.status(200).json({ coursesAndCompletion });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static addCourse = async (req: Request, res: Response) => {
    try {
      const course = await CourseService.addCourse(req.body);
      return res.status(200).json({ course });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static updateCourse = async (req: Request, res: Response) => {
    try {
      await CourseService.updateCourse(req.body);
      return res
        .status(200)
        .json({ action: "updated course", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static getCourse = async (req: Request, res: Response) => {
    try {
      const course = await CourseService.getCourseById(req.params.courseId);
      return res.status(200).json({ course });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  static deleteCourseById = async (req: Request, res: Response) => {
    try {
      await CourseService.removeCourse(req.params.courseId);
      return res
        .status(200)
        .json({ action: "delete course", status: "success" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
