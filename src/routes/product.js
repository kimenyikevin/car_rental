import express from 'express';
import { Auth } from '../utils/middlewares/Authmiddleware';
import {
  createProduct,
  getAllProductsByCategory,
} from '../controllers/product';
const router = express.Router();

router.post('/', createProduct);
router.get('/category/:id', Auth, getAllProductsByCategory);

export default router;
