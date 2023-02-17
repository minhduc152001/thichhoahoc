import pkg from "mongoose";
import { IDocument } from "../../types/interfaces";
import DocumentSchema from "../schemas/document.schema";
const { model } = pkg;

const Document = model<IDocument>("Document", DocumentSchema);

export default Document;
