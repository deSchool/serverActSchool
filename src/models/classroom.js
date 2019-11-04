import mongoose from "mongoose";
const Schema = mongoose.Schema;

// import Material from './material'

var classroomSchema = new Schema(
  {
    name: {
      type: String,
    },
    class_teacher_id: {
      type: Number,
    },
    // material: [{ type: Schema.Types.ObjectId, ref: Material }],
  },
  {
    timestamps: true,
    underscored: true
  }
);

const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
