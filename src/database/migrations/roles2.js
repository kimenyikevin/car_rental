'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('roles', {
      roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIV4,
        primaryKey: true,
      },
      roleName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable('roles');
  },
};
