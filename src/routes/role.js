import express from 'express';
import { Auth, admin } from '../utils/Authmiddleware';
import {
  createRole,
  getAllRoles,
  getRole,
  updateRole,
  deleteRole,
} from '../controllers/roles';
const router = express.Router();

router.post('/', Auth, admin, createRole);
router.get('/', Auth, admin, getAllRoles);
router
  .route('/:roleId')
  .get(Auth, admin, getRole)
  .delete(Auth, admin, deleteRole)
  .put(Auth, admin, updateRole);

export default router;
