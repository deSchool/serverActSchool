const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const generatePassword = require("../helpers/generatePassword");
const bcrypt = require("bcryptjs");

var classLevelSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);

const ClassLevel = mongoose.model("ClassLevel", classLevelSchema);

module.exports = ClassLevel;
