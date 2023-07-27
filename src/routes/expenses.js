import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatExpenses,
    getDailyExpenses,
    getExpensesByName,
    removeExpenses
} from '../controllers/expensesController';
const router = express.Router();

router.post('/', Auth, creatExpenses);
router.get('/capital', Auth, getExpensesByName);
router.get('/daily', Auth, getDailyExpenses);
router.delete('/:id', Auth, removeExpenses);




export default router;
