import model from '../database/models';
import { Op, Sequelize } from 'sequelize';

const FoodMenu = model.FoodMenu;
const FoodMenuCategory = model.FoodMenuCategory;

export const creatFoodMenu = async (req, res) => {
    try {
        const { name, amount, url, foodMenuCategoryId } = req.body;

        const newFoodMenu = await FoodMenu.create({
            name, amount, url, foodMenuCategoryId
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

export const creatFoodMenuCategory = async (req, res) => {
  try {
    const { name, url } = req.body;

    const newFoodMenuCategory = await FoodMenuCategory.create({
        name, url,
    });

    return res.status(201).json({
        status: 'success',
        data: newFoodMenuCategory
    });
} catch (error) {
    res.status(500).json({
        status: 'fail',
        message: 'Error while creating a newFoodMenuCategory',
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
          const { name, amount, url, foodMenuCategoryId} = req.body;

          const newFoodMenu = await menu.update({
            name,
            amount,
            url,
            foodMenuCategoryId
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
        const id = req.params.id;
        const foodMenu = await FoodMenu.findAll({
          // where: {
          //   foodMenuCategoryId: id
          // }
        });

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

export const getAllFoodMenuCategory = async (req, res) => {
  try {
      const foodMenuCategory = await FoodMenuCategory.findAll({ 
        include: { 
          model: FoodMenu,
          as: 'categoryMenu',
        }
      });

     const sortedData = foodMenuCategory.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

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