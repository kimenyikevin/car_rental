import express from 'express';
import { Auth, admin } from '../utils/middlewares/Authmiddleware';
import {
    creatFoodMenu,
    getAllFoodMenu
} from '../controllers/foodMenuController';
const router = express.Router();

router.post('/', Auth, creatFoodMenu);
router.get('/', Auth, getAllFoodMenu);




export default router;
