import City from '../models/city'
import Class from '../models/class'
import ClassLevel from '../models/classLevel'
import ClassRoom from '../models/classroom'
import ClassTeacher from '../models/classTeacher'
import Country from '../models/country'
import Extracurricular from '../models/extracurricular'
import ExtracurricularConj from '../models/extracurricularConj'
import SubjectMaterial from '../models/material'
import Province from '../models/province'
import Report from '../models/report'
import School from '../models/school'
import Student from '../models/student'
import StudentAbsence from '../models/studentAbsence'
import Subject from '../models/subject'
import Teacher from '../models/teacher'
import TeacherAbsence from '../models/teacherAbsence'

import dbCity from '../util/dummydb/db/city'
import dbClass from '../util/dummydb/db/class'
import dbClassLevel from '../util/dummydb/db/classLevel'
import dbCountry from '../util/dummydb/db/country'
import dbExtracurricular from '../util/dummydb/db/extracurricular'
import dbMaterial from '../util/dummydb/db/material'
import dbProvince from '../util/dummydb/db/province'
import dbSchool from '../util/dummydb/db/school'
import dbStudent from '../util/dummydb/db/student'
import dbSubject from '../util/dummydb/db/subject'
import dbTeacher from '../util/dummydb/db/teacher'
import dbTest from '../util/dummydb/db/test'

const addCity = async() => {
    console.log(dbCity);
}

export {
  addCity,
}