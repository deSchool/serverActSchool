import mongoose from "mongoose";
const Schema = mongoose.Schema;

var extracurricularSchema = new Schema(
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

const Extracurricular = mongoose.model("Extracurricular", extracurricularSchema);

export default Extracurricular;
