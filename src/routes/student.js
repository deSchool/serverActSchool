import express from 'express';
var router = express.Router();
import { findAll, register, login, profile, editProfile} from '../controllers/studentController'
import isLogin from '../middleware/isLogin'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `Student page`
  })
});
router.get('/all', findAll)
router.get('/profile', isLogin, profile)
router.post('/register', register)
router.post('/login', login)
router.post('/update', isLogin, editProfile)

export default router