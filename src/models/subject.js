import mongoose from "mongoose";
const Schema = mongoose.Schema;

var subjectSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;
