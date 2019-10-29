import mongoose from "mongoose";
const Schema = mongoose.Schema;

var classLevelSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    underscored: true
  }
);

const ClassLevel = mongoose.model("ClassLevel", classLevelSchema);

export default ClassLevel;
