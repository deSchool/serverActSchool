import mongoose  from "mongoose";
const Schema = mongoose.Schema;

import Student from './student'

var studentAbsenceSchema = new Schema(
  {
    absence: {
      type: Boolean,
    },
    student_id: { type: Schema.Types.ObjectId, ref: Student }
  },
  {
    timestamps: true,
    underscored: true
  }
);

const StudentAbsence = mongoose.model("StudentAbsence", studentAbsenceSchema);

module.exports = StudentAbsence;
