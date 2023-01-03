import express from 'express';

import { signup, signIn } from '../controllers/authController';
const router = express.Router();

router.post('/signup', signup).post('/signin', signIn);

export default router;
