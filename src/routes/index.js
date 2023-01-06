import express from 'express';
import userRouter from './user';
import category from './category';
import product from './product';

const router = express.Router();

router.use('/user', userRouter);
router.use('/category', category);
router.use('/product', product);

export default router;
