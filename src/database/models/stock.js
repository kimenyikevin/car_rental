//products model
'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {

    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  Stock.init(
    {
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
      }
    },
    {
      sequelize,
      tableName: 'stock',
      modelName: 'Stock',
    },
  );
  return Stock;
};
