'use strict';
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Expenses extends Model {
        toJSON() {
            return {
                ...this.get()
            };
        }
    }
    Expenses.init(
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
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.NOW,
            },
        },
        {
            sequelize,
            tableName: 'expenses',
            modelName: 'Expenses',
        },
    );
    return Expenses;
};
