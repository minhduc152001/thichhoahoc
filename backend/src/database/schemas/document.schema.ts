import { Schema } from "mongoose";
import { IDocument } from "../../types/interfaces";

const DocumentSchema = new Schema<IDocument>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    gradeLevel: {
      type: String,
      enum: ["G10", "G11", "G12", "collegePrep"],
      required: true,
    },
    url: { type: String, required: true },
    downloadedCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        // delete ret._id
      },
    },
  }
);

export default DocumentSchema;
