import express from 'express';
var router = express.Router();
import { addCity } from '../controllers/seedData'

/* GET home page. */
router.get('/', addCity);

export default router