import express from 'express';

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
  .get(getCategory)
  .delete(deleteCategory)
  .put(updateCategory);

export default router;
