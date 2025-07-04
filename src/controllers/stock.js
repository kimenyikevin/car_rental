//product controller

'use strict';

import model from '../database/models';
import { Op } from 'sequelize';
import  ExcelJS  from 'exceljs';

const Stock = model.Stock;

export const createStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
     // Load the workbook from an Excel file
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('Click menu.xlsx');
    // Access the first worksheet
  const worksheet = workbook.getWorksheet(1);

   worksheet.eachRow(async (row, rowNumber) => {
    if (rowNumber !== 1) {  
    return res.status(201).json({
      stock: row.values
    });
    }
  });

    // return res.status(201).json({
    //   stock,
    // });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const CreateOpeningStock = async (req, res) => {
  try {
    const closingDate = req.body.closingDate;

    // Get the start and end dates for today
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the beginning of the day
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Set to the beginning of the next day

    // Check if there is data created today
    const dataCreatedToday = await Stock.findAll({
      where: {
        createdAt: {
          [Op.between]: [today, tomorrow],
        },
      },
    });

    if (dataCreatedToday.length > 0) {
      return res
        .status(409)
        .json({ error: 'You have created stock for today please edit!' });
    }

    const startDate = new Date(closingDate);
    const endDate = new Date(closingDate);

    // Set the start date to beginning of the day (midnight)
    startDate.setHours(0, 0, 0, 0);

    // Set the end date to end of the day (11:59:59 PM)
    endDate.setHours(23, 59, 59, 999);

    const dataOnDate = await Stock.findAll({
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    if (dataOnDate.length === 0) {
      return res
        .status(404)
        .json({ error: 'No data found on the specified date.' });
    }

    const stock = dataOnDate.map((record) => record.toJSON());

    const results = await Promise.all(
      stock.map(async (item) => {
        const result = await Stock.create({
          name: item.name,
          opening: item.closing,
          added: 0,
          total: item.closing,
          closing: 0,
          sales: 0,
          unit_price: Number(item.unit_price),
          total_price: Number(item.unit_price) * 0,
        });
        return result;
      }),
    );
    return res.status(201).json({
      results,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllStock = async (req, res) => {
  try {
    const stock = await Stock.findAll({ order: [['createdAt', 'DESC']] });
    const data = {};
    stock.forEach((el) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const timeDate = new Date(el.createdAt);
      const formattedDate = timeDate.toLocaleDateString('en-US', options);
      if (!data[formattedDate]) {
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
    return res.status(404).send('Stock with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const total = Number(req.body.opening) + Number(req.body.added);
    const sales = total - Number(req.body.closing);
    const [updated] = await Stock.update(
      {
        name: req.body.name,
        opening: Number(req.body.opening),
        added: Number(req.body.added),
        total: total,
        closing: Number(req.body.closing),
        sales: sales,
        unit_price: Number(req.body.unit_price),
        total_price: Number(req.body.unit_price) * sales,
      },
      {
        where: { stockId: id },
      },
    );
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
