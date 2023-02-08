import express from 'express';

import { signup, signIn } from '../controllers/authController';
import { Auth } from '../utils/Authmiddleware';
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/users';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.route('/').get(Auth, getAllUsers);
router.route('/:uuid').get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;
