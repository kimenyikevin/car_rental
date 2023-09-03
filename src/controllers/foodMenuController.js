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

export const updateFoodMenu = async (req, res) => {
        try {

            const menu = await FoodMenu.findOne({
                where : {
                    uuid: req.params.id
                }
            });

            if(!menu){
                      return res.status(404).json({
                        status: 'error',
                        error: 'Menu not found',
                      });
                
            }
          const { name, amount, url } = req.body;

          const newFoodMenu = await menu.update({
            name,
            amount,
            url,
          });

          return res.status(200).json({
            status: 'success',
            data: newFoodMenu,
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

       const sortedData = foodMenu.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        return res.status(200).json({
          status: 'success',
          data: sortedData,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching food menu',
            err: error.message,
        });
    }
};