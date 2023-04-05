import { Request, Response } from "express";
import TestRecord from "../services/testRecord.service";

export default class TestRecordCtrl {
  static addTestRecords = async (req: Request, res: Response) => {
    try {
      const history = await TestRecord.addTestRecords(req.body);
      return res.status(200).json({ history });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
