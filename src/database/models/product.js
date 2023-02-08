//products model
'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    //associations with category model
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'categoryid', as: 'category' });
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
  Product.init(
    {
      productid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      categoryid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      base_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      sale_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: 'product',
      modelName: 'Product',
    },
  );
  return Product;
};
