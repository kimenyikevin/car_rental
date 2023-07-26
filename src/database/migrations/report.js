'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('report', {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIV4,
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
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable('report');
    },
};
