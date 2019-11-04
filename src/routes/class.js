import express from 'express';
var router = express.Router();
import isLogin from '../middleware/isLogin'
import { allMaterial } from '../controllers/classController'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `Class Index Page`
  })
});
router.get('/material', isLogin, allMaterial)

export default router