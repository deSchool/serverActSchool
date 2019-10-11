const Student = require("../models/student");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')
const checkPassword = require("../helpers/checkPassword");
const generatePassword = require("../helpers/generatePassword")
const bcryptPass = require('../helpers/bcryptPass')

module.exports = {
  findAll: function(req,res) {
    Student.find({})
    .then((user) => {
      res.status(200).json({
        user,
        message: `All users has been found`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `All users can't be found`
      })
    })
  },
  login: function(req, res) {
    Student.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
              if (bcrypt.compareSync(req.body.password, user.password)) {
                  jwt.sign(
                  {
                      userId: user._id,
                      email: user.email
                  },
                  process.env.JWT_TOKEN,
                  function(err, token) {
                      if (!err) {
                        res.status(201).json({
                            id: user.id,
                            token: token
                        });
                      } else {
                        res.status(500).json({
                            message: `Email and password didn't match 1`
                        });
                      }
                  }
                  );
              } else {
                  res.status(500).json({
                  message: "email and password didnt match 2"
                  });
              }
            } else {
            res.status(404).json({
                message: "you did not have account, please signup first 3"
            });
            }
        })
        .catch(err => {
            res.status(400).json({
                message: `Something's error from our server`
            })
        });
},

register: function(req, res) {
    let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validateEmail.test(String(req.body.email).toLowerCase())) {
       res.status(400).json({
           message: `Please use correct email format`
       })
    } else if (validateEmail.test(String(req.body.email).toLowerCase())) {
        let dataUser = new Student({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phone_number: req.body.phone_number
        });
    
        bcryptPass(dataUser)
        dataUser.save()
        .then(user => {
            const token = jwt.sign({user}, process.env.JWT_TOKEN)
            res.status(201).json({
              id: user.id,
              token,
              score: user.score,
              message: `registration success`
            });
        })
        .catch(err => {
            res.status(500).json({
              err,
              message: `Email has been taken, please use another email`
            });
        });
    } 
  },

  update: function (req,res) {
    Student.updateOne(
      { _id : req.data.userId},
      { score : req.body.score },
      { runValidators: true }
    )
    .then((user) => {
      res.status(201).json({
        user,
        message: `update user score ${req.body.score} success`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `update user score failed`
      })
    })
  },
  
  addingScore: function (req,res) {
    Student.find(
      { _id : req.data.user._id},
      { score : + Number (req.body.score) },
    )
    .then((user) => {
      res.status(201).json({
        user,
        message: `update user score ${req.body.score} success`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `update user score failed`
      })
    })
  },

  profile: function (req, res) {
    Student.findOne({_id: req.data.userId})
    .then((user) => {
      res.status(200).json({
        user,
        message: `Profile access granted`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `Profile access denied`
      })
    })
  },

  editProfile: function (req, res) {
    try {
      let data = {
        username: req.body.username,
        picture: req.body.picture,
        fullname: req.body.fullname,
        password: req.body.password,
        email: req.body.password,
        address: req.body.address,
        hobby: req.body.hobby,
        osis: req.body.osis,
        phone_number: req.body.phone_number,
        status: req.body.status,
        class_level: req.body.class_level
      }
      Student.updateOne(
        {_id: req.data.userId},
        data
      )
      .then((data) =>{
        res.status(200).jso({
          data,
          message: `Data has been updated`
        })
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: `Data failed to update`
        })
      })

    }
    catch(error) {
      console.log(error)
    }
  }
};
