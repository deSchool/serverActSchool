import mongoose from "mongoose";
const Schema = mongoose.Schema;

var classSchema = new Schema(
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

const Class = mongoose.model("Class", classSchema);

export default Class;
