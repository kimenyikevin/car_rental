//product controller

'use strict';

import model from '../database/models';
import { Op, literal } from 'sequelize';

const Stock = model.Stock;

export const createStock = async (req, res) => {
  try {
    const closingDate = req.body.closingDate
    const dataOnDate = await Stock.findAll({
      where: literal(`DATE(createdAt) = '${closingDate}'`),
    });

     if (dataOnDate.length === 0) {
    return res.status(404).json({ error:"No data found on the specified date."});
    } 

    const stock = dataOnDate.map(record => record.toJSON())
        return res.status(201).json({
      stock
    });
    // const total = opening ? (Number(one.opening) + Number(req.body.added)) : 0;
    // const sales = total - Number(req.body.closing);
    // const stock = await Stock.create({
    //   name: req.body.name,
    //   opening: opening,
    //   added: req.body.added,
    //   total: total,
    //   closing: req.body.closing,
    //   sales:  sales,
    //   unit_price: Number(req.body.unit_price),
    //   total_price: Number(req.body.unit_price) * sales
    // });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllStock = async (req, res) => {
  try {
    const stock = await Stock.findAll();
    const data = {};
    stock.forEach(el=> {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const timeDate = new Date(el.createdAt);
        const formattedDate = timeDate.toLocaleDateString('en-US', options);
        if(!data[formattedDate]){
            data[formattedDate] = [el];
        } else {
            data[formattedDate].push(el);
        }
    });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getStockById = async (req, res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findOne({
      where: { stockId: id },
    });
    if (stock) {
      return res.status(200).json({ stock });
    }
    return res
      .status(404)
      .send('Stock with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const total = Number(req.body.opening) + Number(req.body.added);
    const sales = total - Number(req.body.closing);
    const [updated] = await Stock.update({
      name: req.body.name,
      opening: Number(req.body.opening),
      added: Number(req.body.added),
      total: total,
      closing: Number(req.body.closing),
      sales:  sales,
      unit_price: Number(req.body.unit_price),
      total_price: Number(req.body.unit_price) * sales
    }, {
      where: { productid: id },
    });
    if (updated) {
      const updatedStock = await Stock.findOne({
        where: { stockId: id },
      });
      return res.status(200).json({ stock: updatedStock });
    }
    throw new Error('Stock not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteStock = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Stock.destroy({
      where: { stockId: id },
    });
    if (deleted) {
      return res.status(204).send('Stock deleted');
    }
    throw new Error('Stock not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
