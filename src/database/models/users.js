'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Product }) {
        this.hasMany(Product, { foreignKey: 'userid', as: 'products', onDelete: 'CASCADE' });
    }
    toJSON() {
      return {
        ...this.get(),
        createdAt: undefined,
        updatedAt: undefined,
        password: undefined,
        passwordResetToken: undefined,
        isActive: undefined,
      };
    }
  }
  User.init(
    {
      userid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passwordResetToken: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      // roleId: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      // },
      roleName: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    },
  );
  return User;
};
