'use strict';
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class FoodMenu extends Model {
           static associate({ FoodMenuCategory }) {
            this.belongsTo(FoodMenuCategory, { foreignKey: 'foodMenuCategoryId', as: 'categoryMenu' });
        }
        toJSON() {
            return {
                ...this.get()
            };
        }
    }
    FoodMenu.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            foodMenuCategoryId: {
             type: DataTypes.UUID,
             allowNull: true,
            }
        },
        {
            sequelize,
            tableName: 'foodMenu',
            modelName: 'FoodMenu',
        },
    );
    return FoodMenu;
};
