import model from '../database/models';
import { Op, Sequelize } from 'sequelize';

const Expenses = model.Expenses;

export const creatExpenses = async (req, res) => {
    try {
        const { name, amount, comment, date } = req.body;




        const targetDate = new Date(date);

        // Get the start and end timestamps of the target date
        const startDate = targetDate.setHours(0, 0, 0, 0);

        const endDate = targetDate.setHours(23, 59, 59, 999);

        // Find records with createdAt between the start and end timestamps
        const expenses = await Expenses.findAll({
            where: {
                name: name,
                date: {
                    [Op.between]: [startDate, endDate],
                },
            },
        });
        if (expenses.length !== 0) {
            return res.status(401).json({
                status: 'fail',
                message: ' expense has been created today',
            });
        }

        const newExpenses = await Expenses.create({
            name, amount, comment, date
        });

        return res.status(201).json({
            status: 'success',
            data: newExpenses
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while creating a report',
            err: error.message,
        });
    }
}


export const getDailyExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.findAll({  });
        return res.status(200).json({
            status: 'success',
            data: expenses,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};


export const getExpensesByName = async (req, res) => {
    try {
        const currentDate = new Date();
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const expenses = await Expenses.findAll({
            where: {
                createdAt: {
                  [Op.gte]: startOfMonth,
                },
              },
            attributes: [
                'name',
                [Sequelize.fn('SUM', Sequelize.col('amount')), 'totalExpenses'],
            ],
            group: ['name'],
            raw: true,
        });
        return res.status(200).json({
            status: 'success',
            data: expenses,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};


export const removeExpenses = async (req, res) => {
    try {
        const expense = await Expenses.findOne({
            where: {
                uuid: req.params.id,
            },
        });
        if (!expense) {
            return res.status(404).json({
                status: 'error',
                error: 'Expense not found',
            });
        }

        await expense.destroy();
        res.status(200).json({
            status: 'success',
            message: 'Expenses deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};