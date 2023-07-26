'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Report extends Model {
        // static associate({ Credit }) {
        //     this.belongsTo(Credit, { foreignKey: 'creditId', as: 'credit' });
        // }
        toJSON() {
            return {
                ...this.get()
            };
        }
    }
    Report.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            beverage: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            food: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            damages: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tokenBiyali: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            expenses: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            pos: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            credit: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            momo: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cash: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            totalRecieved: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'report',
            modelName: 'Report',
        },
    );
    return Report;
};
