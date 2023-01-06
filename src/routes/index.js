import express from 'express';
import userRouter from './user';
import category from './category';

const router = express.Router();

router.use('/user', userRouter);
router.use('/category', category);

export default router;
