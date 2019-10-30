process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config()
import debug from 'debug'
import express from 'express';
import path from 'path';
import mongoose from 'mongoose'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

import City from '../../models/city'
import Class from '../../models/class'
import ClassLevel from '../../models/classLevel'
import ClassRoom from '../../models/classroom'
import ClassTeacher from '../../models/classTeacher'
import Country from '../../models/country'
import Extracurricular from '../../models/extracurricular'
import ExtracurricularConj from '../../models/extracurricularConj'
import Material from '../../models/material'
import Province from '../../models/province'
import Report from '../../models/report'
import School from '../../models/school'
import Student from '../../models/student'
import StudentAbsence from '../../models/studentAbsence'
import Subject from '../../models/subject'
import Teacher from '../../models/teacher'
import TeacherAbsence from '../../models/teacherAbsence'

import dbCity from './db/city.js.js.js'

// const addDb = async () => {
  
// }
console.log(City);