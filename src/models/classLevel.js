import mongoose  from "mongoose";
const Schema = mongoose.Schema;

var classLevelSchema = new Schema(
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

const ClassLevel = mongoose.model("ClassLevel", classLevelSchema);

module.exports = ClassLevel;
