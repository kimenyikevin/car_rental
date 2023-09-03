import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatFoodMenu,
    getAllFoodMenu,
    updateFoodMenu
} from '../controllers/foodMenuController';
const router = express.Router();

router.post('/', Auth, creatFoodMenu);
router.put('/:id', Auth, updateFoodMenu);
router.get('/', getAllFoodMenu);




export default router;
