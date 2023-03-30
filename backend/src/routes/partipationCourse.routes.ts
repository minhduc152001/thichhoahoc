import { Application } from "express";
import ParticipationCourseCtrl from "../controllers/participationCourse.ctrl";

export default (app: Application) => {
  // app.get("/api/partipationCourse", CourseCtrl.getAllCourses);
  app.get(
    "/api/participation/:courseId/:userId",
    ParticipationCourseCtrl.getCompletedLessonsInCourse
  );
  app.post(
    "/api/participation/:courseId/:userId",
    ParticipationCourseCtrl.addParticipationCourse
  );
  app.put(
    "/api/participation/:courseId/:userId",
    ParticipationCourseCtrl.updateParticipationCourse
  );
  
  // app.post("/api/course", CourseCtrl.addCourse);
  // app.put("/api/course/:courseId", CourseCtrl.updateCourse);
  // app.delete("/api/course/:courseId", CourseCtrl.deleteCourseById);
};
