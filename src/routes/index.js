import express from 'express';
var router = express.Router();
import studentRoute from './student'
import seedData from './seedData'
import classRoute from './class'

/* GET home page. */
router.use(`/seed`, seedData)
router.get('/', function(req, res, next) {
  res.json({
    message: `index home`
  })
});
router.use('/student', studentRoute)
router.use('/class', classRoute)

export default router