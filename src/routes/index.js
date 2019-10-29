import express from 'express';
var router = express.Router();
import studentRoute from './student'
import seedData from './seedData'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `index home`
  })
});
router.use('/student', studentRoute)
router.use(`/seed`, seedData)

export default router