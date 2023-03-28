import { Application } from "express";
import RiddleCtrl from "../controllers/riddle.ctrl";

export default (app: Application) => {
  app.get("/api/riddles", RiddleCtrl.listRiddles);
  app.get("/api/riddle/:riddleId", RiddleCtrl.getRiddle);
  app.post("/api/riddle", RiddleCtrl.addRiddle);
  app.put("/api/riddle/:riddleId", RiddleCtrl.updateRiddle);
  app.delete("/api/riddle/:riddleId", RiddleCtrl.deleteRiddle);
};
