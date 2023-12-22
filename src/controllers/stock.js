//product controller

'use strict';

import model from '../database/models';

const Stock = model.Stock;

export const createStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    return res.status(201).json({
      stock,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllStock = async (req, res) => {
  try {
    const stock = await Stock.findAll();
    const data = {};
    stock.forEach(el=> {
        if(!data[el.createdAt]){
            data[el.createdAt] = [el];
        } else {
            data[el.createdAt].push(el);
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
    const [updated] = await Stock.update(req.body, {
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
