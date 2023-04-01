import { Application } from "express";
import healthRoutes from "./health.routes";
import userRoutes from "./user.routes";
import courseRoutes from "./course.routes";
import lessonRoutes from "./lesson.routes";
import riddleRoutes from "./riddle.routes";
import documentRoutes from "./document.routes";
import testRoutes from "./test.routes";
import partipationCourseRoutes from "./partipationCourse.routes";
import checkoutRoutes from "./checkout.routes";

export default (app: Application) => {
  healthRoutes(app);
  userRoutes(app);
  courseRoutes(app);
  lessonRoutes(app);
  riddleRoutes(app);
  documentRoutes(app);
  testRoutes(app);
  partipationCourseRoutes(app);
  checkoutRoutes(app);
};
