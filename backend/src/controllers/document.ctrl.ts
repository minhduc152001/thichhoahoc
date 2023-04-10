import { Request, Response } from "express";
import DocumentService from "../services/document.service";

export default class CourseCtrl {
  static listDocuments = async (req: Request, res: Response) => {
    try {
      const docs = await DocumentService.listDocs();
      return res.status(200).json({ documents: docs });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static getDocumentById = async (req: Request, res: Response) => {
    try {
      const doc = await DocumentService.getDocumentById(req.params.documentId);
      return res.status(200).json({ document: doc });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static addDocument = async (req: Request, res: Response) => {
    try {
      const doc = await DocumentService.addDocument(req.body);
      return res.status(200).json({ document: doc });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static updateDocument = async (req: Request, res: Response) => {
    try {
      await DocumentService.updateDocument(req.body);
      return res
        .status(200)
        .json({ action: "updated document", status: "success" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  static incDownloadCount = async (req: Request, res: Response) => {
    try {
      await DocumentService.incDownloadCount(req.params.documentId);
      return res
        .status(200)
        .json({ action: "updated course", status: "success" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  static deleteDocument = async (req: Request, res: Response) => {
    try {
      await DocumentService.removeDocument(req.params.documentId);
      return res
        .status(200)
        .json({ action: "deleted document", status: "success" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
}
