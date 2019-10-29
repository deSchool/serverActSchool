import mongoose from "mongoose";
const Schema = mongoose.Schema;

var schoolSchema = new Schema(
  {
    name: {
      type: String,
    },
    city_id: {
      type: Number,
    },
    province_id: {
      type: Number,
    },
    country_id: {
      type: Number,
    },
    postal_code: {
      type: String,
    },
    phone_number: {
      type: String,
    },
  },
  {
    timestamps: true,
    underscored: true
  }
);

const School = mongoose.model("School", schoolSchema);

export default School;
