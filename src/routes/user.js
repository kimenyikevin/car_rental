import express from 'express';

import { signup, signIn } from '../controllers/authController';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/users';
const router = express.Router();

router.post('/signin', signIn);
router.route('/signup').post(signup);
router.route('/').get(getAllUsers);
router
  .route('/:uuid')
  .get(Auth, getSingleUser)
  .put(Auth, updateUser)
  .delete(Auth, deleteUser);

export default router;
