import express from 'express';
import { Auth } from '../utils/Authmiddleware';
import {
  createProduct,
  getAllProductsByCategory,
} from '../controllers/product';
const router = express.Router();

router.post('/', Auth, createProduct);
router.get('/category/:id', Auth, getAllProductsByCategory);

export default router;
