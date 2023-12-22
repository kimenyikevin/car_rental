import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    createStock,
    getAllStock,
    getStockById,
    updateStock,
    deleteStock
} from '../controllers/stock';
const router = express.Router();

router.post('/', Auth, createStock);
router.get('/', Auth, getAllStock);
router.get('/:id', Auth, getStockById);
router.delete('/:id', Auth, deleteStock);
router.patch('/:id', Auth, updateStock);



export default router;
