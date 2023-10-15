import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatFoodMenu,
    getAllFoodMenu,
    updateFoodMenu,
    creatFoodMenuCategory,
    getAllFoodMenuCategory
} from '../controllers/foodMenuController';
const router = express.Router();

router.post('/', Auth, creatFoodMenu);
router.put('/:id', Auth, updateFoodMenu);
router.get('/:id', getAllFoodMenu);
router.post('/category', Auth, creatFoodMenuCategory)
router.get('/all/category', getAllFoodMenuCategory)




export default router;
