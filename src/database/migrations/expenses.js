'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('expenses', {
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
        await queryInterface.dropTable('expenses');
    },
};
