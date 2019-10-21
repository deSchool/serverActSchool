import mongoose from "mongoose";
const Schema = mongoose.Schema;
import generatePassword from "../helpers/generatePassword";
import bcrypt from "bcryptjs";

import ClassLevel from "../models/classLevel";


var teacherSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"]
    },
    picture: {
      type: String
    },
    fullname: {
      type: String,
      required: [true, "fullname is required"]
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "password min 6 character"]
    },
    email: {
      type: String,
      // unique: true,
      lowercase: true,
      validate: {
        validator(val) {
          var emailRegex = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          if(!emailRegex.test(val)){
            throw new Error('your email is not valid');
          }
        }
      },
      required: [true, "email is required"]
    },
    address: {
      type: String,
      required: [true, "address is required"]
    },
    hobby: {
      type: String,
    },
    phone_number: {
      type: String,
      required: [true, "name is required"]
    },
    status: {
      type: Boolean,
      default: true
    },
    class_level: { type: Schema.Types.ObjectId, ref: "ClassLevel" }
  },
  {
    timestamps: true,
    underscored: true
  }
);

// teacherSchema.post("validate", doc => {
//   doc.password = bcrypt.hashSync(
//     doc.password,
//     Number(process.env.SALT_PASSWORD)
//   );
// });

// teacherSchema.post("save", function(teacher) {
//   generatePassword(this.email, this.password).then(function(newPassword) {
//     Teacher.update({ _id: teacher._id }, { password: newPassword })
//       .then(function() {})
//       .catch(function() {});
//   });
// });

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
