import { Application } from "express";
import DocumentCtrl from "../controllers/document.ctrl";

export default (app: Application) => {
  app.get("/api/documents", DocumentCtrl.listDocuments);
  app.get("/api/document/:documentId", DocumentCtrl.getDocumentById);
  app.post("/api/document", DocumentCtrl.addDocument);
  app.put("/api/document/:documentId", DocumentCtrl.updateDocument);
  app.delete("/api/document/:documentId", DocumentCtrl.deleteDocument);
};
