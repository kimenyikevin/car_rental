'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    //associations with product model
    static associate({ Product }) {
      this.hasMany(Product, { foreignKey: 'categoryid', as: 'products' });
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

  Category.init(
    {
      categoryid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
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
      tableName: 'category',
      modelName: 'Category',
    },
  );
  return Category;
};
