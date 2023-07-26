import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatCredit,
    getCreditByUser,
    getDailyCredit
} from '../controllers/creaditController';
const router = express.Router();

router.post('/', creatCredit);
router.get('/user', getCreditByUser);
router.get('/daily', getDailyCredit);



export default router;
