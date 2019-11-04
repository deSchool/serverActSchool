import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import checkPassword from "../helpers/checkPassword"
import generatePassword from "../helpers/generatePassword"
import bcryptPass from '../helpers/bcryptPass'
import Student from "../models/student"
import StudentAbsence from '../models/studentAbsence'
import ClassLevel from '../models/classLevel'
import Material from '../models/material'
import classroom from '../models/classroom'
import Classroom from "../models/classroom"
import Teacher from "../models/teacher"

module.exports = {
  allMaterial: async(req,res) => {
    try {
      Student.findOne({_id: req.data.userId})
        .then((user) => {
          Material.find(
            {classroom_id: user.classroom_id}
          )
          // Classroom.find(
          //   {_id: user.classroom_id}
          // )
          // .populate('material')
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
    }
    catch (error) {
      console.log(error);
    }
  },
  getHomeRoomTeacher: async(req,res) => {
    
  }
};
