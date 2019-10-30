import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
      type: Number,
    },
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
