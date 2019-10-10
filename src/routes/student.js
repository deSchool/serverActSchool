import express from 'express';
var router = express.Router();
import { findAll, register, login, profile} from '../controllers/studentController'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `Student page`
  })
});
router.get('/all', findAll)
router.get('/profile', profile)
router.post('/register', register)
router.post('/login', login)

export default router