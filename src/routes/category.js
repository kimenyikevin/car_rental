import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
  createCategory,
  getCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
} from '../controllers/category';
const router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router
  .route('/:categoryid')
  .get(Auth, getCategory)
  .delete(Auth, deleteCategory)
  .put(Auth, updateCategory);

export default router;
