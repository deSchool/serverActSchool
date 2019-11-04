import mongoose from "mongoose";
const Schema = mongoose.Schema;

import Classroom from "./classroom";
import ClassLevel from "./classLevel"

var materialSchema = new Schema(
  {
    name: {
      type: String,
    },
    content: {
      type: String,
    },
    pict: {
      type: String,
    },
    teacher_id: {
      type: Number,
    },
    classroom_id: {
      type: String
    },
    // classroom_id: [{ type: Schema.Types.ObjectId, ref: Classroom }],
    subject_id: {
      type: Number,
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

const Material = mongoose.model("Material", materialSchema);

export default Material;
