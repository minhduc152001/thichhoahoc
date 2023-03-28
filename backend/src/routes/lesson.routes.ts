import { Application } from "express";
import LessonCtrl from "../controllers/lesson.ctrl";

export default (app: Application) => {
  app.get("/api/lessons", LessonCtrl.getAllLessons);
  app.get("/api/lesson/:lessonId", LessonCtrl.getLesson);
  app.put("/api/lesson/:lessonId", LessonCtrl.updateLesson);
  app.post("/api/lesson", LessonCtrl.addLesson);
  app.delete("/api/lesson/:lessonId", LessonCtrl.deleteLessonById);
};
