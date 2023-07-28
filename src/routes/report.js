import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creteReport,
    getAllreportAndCount,
    getDailyRepport,
    removeReport
} from '../controllers/reportController';
const router = express.Router();

router.post('/', Auth, creteReport);
router.get('/', Auth, getDailyRepport);
router.get('/count', Auth, getAllreportAndCount);
router.delete('/:id', Auth, removeReport);



export default router;
