import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatCredit,
    getCreditByUser,
    getDailyCredit
} from '../controllers/creaditController';
const router = express.Router();

router.post('/', Auth, creatCredit);
router.get('/user', Auth, getCreditByUser);
router.get('/daily', Auth, getDailyCredit);



export default router;
