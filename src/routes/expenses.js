import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatExpenses,
    getDailyExpenses,
    getExpensesByName
} from '../controllers/expensesController';
const router = express.Router();

router.post('/', creatExpenses);
router.get('/capital', getExpensesByName);
router.get('/daily', getDailyExpenses);



export default router;
