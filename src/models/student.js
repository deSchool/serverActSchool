const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const generatePassword = require("../helpers/generatePassword");
const bcrypt = require("bcryptjs");


var studentSchema = new Schema(
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
      // required: [true, "fullname is required"]
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
      // required: [true, "address is required"]
    },
    hobby: {
      type: String,
    },
    osis: {
      type: Boolean,
      default: false
    },
    phone_number: {
      type: String,
      required: [true, "name is required"]
    },
  },
  {
    timestamps: true
  }
);

// studentSchema.post("validate", doc => {
//   doc.password = bcrypt.hashSync(
//     doc.password,
//     Number(process.env.SALT_PASSWORD)
//   );
// });

// studentSchema.post("save", function(student) {
//   generatePassword(this.email, this.password).then(function(newPassword) {
//     Student.update({ _id: student._id }, { password: newPassword })
//       .then(function() {})
//       .catch(function() {});
//   });
// });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
