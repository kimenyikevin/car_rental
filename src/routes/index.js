import express from 'express';
import userRouter from './user';
import category from './category';
import product from './product';
import role from './role';
import report from './report';
import credit from './credit';
import expenses from './expenses';

const router = express.Router();

router.use('/users', userRouter);
router.use('/category', category);
router.use('/product', product);
router.use('/role', role);
router.use('/report', report);
router.use('/credit', credit);
router.use('/expenses', expenses);

export default router;
