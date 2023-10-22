import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatFoodMenu,
    getAllFoodMenu,
    updateFoodMenu,
    creatFoodMenuCategory,
    getAllFoodMenuCategory,
    deleteFoodMenuCategory,
    updateFoodMenuCategory
} from '../controllers/foodMenuController';
const router = express.Router();

router.post('/', Auth, creatFoodMenu);
router.put('/:id', Auth, updateFoodMenu);
router.get('/:id', getAllFoodMenu);
router.post('/category', Auth, creatFoodMenuCategory)
router.put('/category/:id', Auth, updateFoodMenuCategory)
router.get('/all/category', getAllFoodMenuCategory)
router.delete('/category/:id', deleteFoodMenuCategory)




export default router;
