'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('credit', {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIV4,
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
        await queryInterface.dropTable('credit');
    },
};
