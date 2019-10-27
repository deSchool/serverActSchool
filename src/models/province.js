import mongoose  from "mongoose";
const Schema = mongoose.Schema;

var provinceSchema = new Schema(
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

const Province = mongoose.model("Province", provinceSchema);

export default Province;
