import express from 'express';
var router = express.Router();
import isLogin from '../middleware/isLogin'
import { findAll } from '../controllers/classController'

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json({
//     message: `Material Index Page`
//   })
// });
router.get('/material', isLogin, findAll)

export default router