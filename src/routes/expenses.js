import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatExpenses,
    getDailyExpenses,
    getExpensesByName
} from '../controllers/expensesController';
const router = express.Router();

router.post('/', Auth, creatExpenses);
router.get('/capital', Auth, getExpensesByName);
router.get('/daily', Auth, getDailyExpenses);



export default router;
