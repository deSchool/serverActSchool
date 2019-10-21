import express from 'express';
var router = express.Router();
import studentRoute from './student'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `index home`
  })
});
router.use('/student', studentRoute)

export default router