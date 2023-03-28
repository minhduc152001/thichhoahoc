import { Application } from "express";
import CourseCtrl from "../controllers/course.ctrl";

export default (app: Application) => {
  app.get("/api/courses", CourseCtrl.getAllCourses);
  app.get("/api/course/:courseId", CourseCtrl.getCourse);
  app.post("/api/course", CourseCtrl.addCourse);
  app.put("/api/course/:courseId", CourseCtrl.updateCourse);
  app.delete("/api/course/:courseId", CourseCtrl.deleteCourseById);
};
