import { Application } from "express";

export default (app: Application) => {
  app.get("/health-check", (req, res) => {
    res.send("OK");
  });
};
