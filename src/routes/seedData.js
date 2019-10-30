import express from 'express';
var router = express.Router();
import { seedData } from '../controllers/seedData'

/* GET home page. */
router.post('/', seedData);

export default router