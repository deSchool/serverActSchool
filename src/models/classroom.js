import mongoose  from "mongoose";
const Schema = mongoose.Schema;

var classroomSchema = new Schema(
  {
    name: {
      type: String,
    },
    class_teacher_id: {
      type: Number,
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
