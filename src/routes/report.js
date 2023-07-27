import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creteReport,
    getAllreportAndCount,
    getDailyRepport
} from '../controllers/reportController';
const router = express.Router();

router.post('/', Auth, creteReport);
router.get('/', Auth, getDailyRepport);
router.get('/count', Auth, getAllreportAndCount);


export default router;
