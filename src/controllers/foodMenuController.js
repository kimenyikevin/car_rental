import model from '../database/models';
import { Op, Sequelize } from 'sequelize';

const FoodMenu = model.FoodMenu;

export const creatFoodMenu = async (req, res) => {
    try {
        const { name, amount, url } = req.body;

        const newFoodMenu = await FoodMenu.create({
            name, amount, url,
        });

        return res.status(201).json({
            status: 'success',
            data: newFoodMenu
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while creating a report',
            err: error.message,
        });
    }
}


export const getAllFoodMenu = async (req, res) => {
    try {
        const foodMenu = await FoodMenu.findAll({});


        return res.status(200).json({
            status: 'success',
            data: foodMenu,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching food menu',
            err: error.message,
        });
    }
};