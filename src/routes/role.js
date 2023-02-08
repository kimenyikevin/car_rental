import express from 'express';

import { createRole, getAllRoles, getRole } from '../controllers/roles';
const router = express.Router();

router.post('/', createRole);
router.get('/', getAllRoles);
router.route('/:roleId').get(getRole);

export default router;
