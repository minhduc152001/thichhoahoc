import { Schema } from "mongoose";
import { ICourse } from "../../types/interfaces";
import { generateSlug } from "../../utils/generateSlug";

const CourseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    author: { type: String, required: true, default: "Thầy Vũ Minh Đức" },
    isFree: { type: Boolean, required: true, default: true },
    img: {
      type: String,
      required: true,
      default:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
    },
    gradeLevel: {
      type: String,
      enum: ["G10", "G11", "G12", "collegePrep"],
      required: true,
    },
    students: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson", default: [] }],
    slug: {
      type: String,
      unique: true,
    },
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

CourseSchema.pre('save', function(next) {
  // Check if the name field has been modified
  if (!this.isModified('name')) {
    return next();
  }

  // Generate a slug based on the name field
  const slug = generateSlug(this.name as string);

  // Set the slug field to the generated slug
  this.slug = slug;

  next();
});

export default CourseSchema;
