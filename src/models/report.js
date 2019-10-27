import mongoose  from "mongoose";
const Schema = mongoose.Schema;

var reportSchema = new Schema(
  {
    name: {
      type: String,
    },
    score: {
      type: String,
    },
    test_id: {
      type: Number,
    },
    teacher_id: {
      type: Number,
    },
    student_id: {
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

const Material = mongoose.model("Material", reportSchema);

export default Material;
