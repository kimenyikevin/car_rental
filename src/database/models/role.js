'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'roleId', as: 'users' });
    }
    toJSON() {
      return {
        ...this.get(),
        createdAt: undefined,
        updatedAt: undefined,
        isActive: undefined,
      };
    }
  }
  Role.init(
    {
      roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    },
    {
      sequelize,
      tableName: 'role',
      modelName: 'Role',
    },
  );
  return Role;
};
