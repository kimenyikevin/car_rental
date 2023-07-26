'use strict';
import { Model, Sequelize } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Credit extends Model {
        // static associate({ Report }) {
        //     this.hasMany(Report, { foreignKey: 'creditId', as: 'report' });
        // }
        toJSON() {
            return {
                ...this.get()
            };
        }
    }
    Credit.init(
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
            paidAmount: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.NOW,
            },
        },
        {
            sequelize,
            tableName: 'credit',
            modelName: 'Credit',
        },
    );
    return Credit;
};
