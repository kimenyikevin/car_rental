import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creteReport,
    getAllreportAndCount,
    getDailyRepport
} from '../controllers/reportController';
const router = express.Router();

router.post('/', creteReport);
router.get('/', getDailyRepport);
router.get('/count', getAllreportAndCount);


export default router;
