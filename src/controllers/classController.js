import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import checkPassword from "../helpers/checkPassword"
import generatePassword from "../helpers/generatePassword"
import bcryptPass from '../helpers/bcryptPass'
import Student from "../models/student"
import StudentAbsence from '../models/studentAbsence'
import ClassLevel from '../models/classLevel'
import Material from '../models/material'

module.exports = {
  findAll: function(req,res) {
    Student.findOne({_id: req.data.userId})
      .then((user) => {
        console.log(`==== user`, user.classroom_id);
        Material.find(
          {classroom_id: user.classroom_id}
        )
        .then((data) => {
          res.status(200).json({
            data,
            message: `Materials has been sent`
          })
        })
        .catch((err) => {
          res.status(500).json({
            err,
            message: `Materials failed to get`
          })
        })
      })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `Users data problem`
      })
    })
  },
};
