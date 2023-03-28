import { EGradeLevel } from "../constants/enumTypes";
import Document from "../database/models/document.model";
import { IDocument } from "../types/interfaces";

export default class DocumentService {
  static listDocs = async () => {
    return await Document.find();
  };

  static listDocsByGrade = async (gradeLevel: EGradeLevel) => {
    const docs = await Document.find({ gradeLevel });
    return docs;
  };

  static getDocumentById = async (id: string) => {
    const document = await Document.findById(id);
    return document;
  };

  static addDocument = async (documentArgs: IDocument) => {
    const [document] = await Document.insertMany([documentArgs]);
    return document;
  };

  static updateDocument = async (documentArgs: IDocument) => {
    await Document.findOneAndUpdate(
      { _id: documentArgs._id },
      { $set: documentArgs }
    );
    return await Document.findById(documentArgs._id);
  };

  static removeDocument = async (_id: string) => {
    const document = await Document.findByIdAndDelete(_id);
    return `The document ${document?._id} was deleted`;
  };
}
