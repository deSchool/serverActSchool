import express from 'express';
var router = express.Router();
import { findAll} from '../controllers/studentController'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: `Student page`
  })
});
router.get('/profile', findAll)

export default router