import { Schema } from "mongoose";
import { IDocument } from "../../types/interfaces";

const DocumentSchema = new Schema<IDocument>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
    downloadedCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default DocumentSchema;
