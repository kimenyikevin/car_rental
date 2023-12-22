'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('stock', {
            stockId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
              },
              name: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              opening: {
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              added: {
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              total: {
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              closing: {
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              sales: {
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              unit_price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              total_price: {
                type: DataTypes.DECIMAL,
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
        await queryInterface.dropTable('stock');
    },
};
