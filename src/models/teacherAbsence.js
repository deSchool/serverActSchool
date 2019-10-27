import mongoose  from "mongoose";
const Schema = mongoose.Schema;

import { Teacher } from "./teacher";

var teacherAbsenceSchema = new Schema(
  {
    absence: {
      type: Boolean,
    },
    teacher_id: { type: Schema.Types.ObjectId, ref: Teacher }
  },
  {
    timestamps: true,
    underscored: true
  }
);

const TeacherAbsence = mongoose.model("TeacherAbsence", teacherAbsenceSchema);

export default TeacherAbsence;
