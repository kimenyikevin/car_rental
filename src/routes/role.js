import express from 'express';

import {
  createRole,
  getAllRoles,
  getRole,
  updateRole,
  deleteRole,
} from '../controllers/roles';
const router = express.Router();

router.post('/', createRole);
router.get('/', getAllRoles);
router.route('/:roleId').get(getRole).delete(deleteRole).put(updateRole);

export default router;
