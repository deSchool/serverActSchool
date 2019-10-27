import mongoose  from "mongoose";
const Schema = mongoose.Schema;

var countrySchema = new Schema(
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

const Country = mongoose.model("Country", countrySchema);

export default Country;
