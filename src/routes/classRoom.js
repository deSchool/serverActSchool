import express from 'express';
var router = express.Router();
import isLogin from '../middleware/isLogin'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `Classroom Index Page`
  })
});

export default router