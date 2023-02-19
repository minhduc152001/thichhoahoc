import { EGradeLevel } from "../constants/enumTypes";
import DocumentService from "../services/document.service";
import { IDocument } from "../types/interfaces";

const documentResolvers = {
  listDocsByGrade: async (_: undefined, args: { gradeLevel: EGradeLevel }) => {
    const docs = await DocumentService.listDocsByGrade(args.gradeLevel);
    return docs;
  },

  getDocumentById: async (_: undefined, args: { _id: string }) => {
    const document = await DocumentService.getDocumentById(args._id);
    return document;
  },

  addDocument: async (_: undefined, args: { document: IDocument }) => {
    const document = await DocumentService.addDocument(args.document);
    return document;
  },

  updateDocument: async (_: undefined, args: { document: IDocument }) => {
    const document = await DocumentService.updateDocument(args.document);
    return document;
  },

  removeDocument: async (_: undefined, args: { _id: string }) => {
    return DocumentService.removeDocument(args._id);
  },
};

export default documentResolvers;
