import mongoose from "mongoose";
const Schema = mongoose.Schema;


var testSchema = new Schema(
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

const Test = mongoose.model("Test", testSchema);

export default Test;
