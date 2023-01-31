import express from 'express';

import { signup, signIn } from '../controllers/authController';
import { getAllUsers } from '../controllers/users';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.get('/', getAllUsers);

export default router;
