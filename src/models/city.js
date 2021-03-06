import mongoose from "mongoose";
const Schema = mongoose.Schema;

var citySchema = new Schema(
  {
    name: {
      type: String,
    },
    province_id: {
      type: Number
    }
  },
  {
    timestamps: true,
    underscored: true
  }
);

const City = mongoose.model("City", citySchema);

export default City;
