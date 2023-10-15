'use strict';
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class FoodMenuCategory extends Model {
          static associate({ FoodMenu }) {
             this.hasMany(FoodMenu, { foreignKey: 'foodMenuCategoryId', as: 'categoryMenu' });
        }
        toJSON() {
            return {
                ...this.get()
            };
        }
    }
    FoodMenuCategory.init(
        {
            foodMenuCategoryId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'foodMenuCategory',
            modelName: 'FoodMenuCategory',
        },
    );
    return FoodMenuCategory;
};
