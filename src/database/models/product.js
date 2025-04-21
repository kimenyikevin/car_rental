//products model
'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    //associations with category model
    static associate({ Category, User }) {
      this.belongsTo(Category, { foreignKey: 'categoryid', as: 'category' });
      this.belongsTo(User, { foreignKey: 'userid', as: 'users' });
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
      userid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      categoryid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
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
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year_registration: {
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
      tableName: 'product',
      modelName: 'Product',
    },
  );
  return Product;
};
