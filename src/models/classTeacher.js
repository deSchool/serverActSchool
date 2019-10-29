import mongoose from "mongoose";
const Schema = mongoose.Schema;

var classTeacherSchema = new Schema(
  {
    class_id: {
      type: Number,
    },
    class_room_id: {
      type: Number,
    },
    subject_id: {
      type: Number,
    },
    teacher_id: {
      type: Number,
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

const ClassTeacher = mongoose.model("ClassTeacher", classTeacherSchema);

export default ClassTeacher;