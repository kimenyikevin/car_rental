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

router.post('/signin', signIn);
router.route('/signup').post(Auth, admin, signup);
router.route('/').get(Auth, admin, getAllUsers);
router
  .route('/:uuid')
  .get(Auth, admin, getSingleUser)
  .put(Auth, admin, updateUser)
  .delete(Auth, admin, deleteUser);

export default router;
