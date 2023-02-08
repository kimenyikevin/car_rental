import express from 'express';

import { signup, signIn } from '../controllers/authController';
import { Auth, admin } from '../utils/Authmiddleware';
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/users';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.route('/').get(Auth, admin, getAllUsers);
router
  .route('/:uuid')
  .get(Auth, getSingleUser)
  .put(Auth, updateUser)
  .delete(Auth, deleteUser);

export default router;
