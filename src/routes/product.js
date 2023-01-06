import express from 'express';

import {
  createProduct,
  getAllProductsByCategory,
} from '../controllers/product';
const router = express.Router();

router.post('/', createProduct);
router.get('/category/:id', getAllProductsByCategory);

export default router;
