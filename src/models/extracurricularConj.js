import mongoose  from "mongoose";
const Schema = mongoose.Schema;

var extracurricularConjSchema = new Schema(
  {
    extracurricular_id: {
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

const ExtracurricularConj = mongoose.model("ExtracurricularConj", extracurricularConjSchema);

export default ExtracurricularConj;
