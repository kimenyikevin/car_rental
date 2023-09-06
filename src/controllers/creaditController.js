import model from '../database/models';
import { Op, Sequelize } from 'sequelize';

const Credit = model.Credit;

export const creatCredit = async (req, res) => {
    try {
        const { name, amount, comment, paidAmount, date } = req.body;
        const targetDate = new Date(date);

        // Get the start and end timestamps of the target date
        const startDate = targetDate.setHours(0, 0, 0, 0);

        const endDate = targetDate.setHours(23, 59, 59, 999);

        // Find records with createdAt between the start and end timestamps
        const credit = await Credit.findAll({
            where: {
                name: name,
                date: {
                    [Op.between]: [startDate, endDate],
                },
            },
        });
        if (credit.length !== 0) {
            return res.status(401).json({
                status: 'fail',
                message: ' credit with this user has been created on this day',
            });
        }

        const newCredit = await Credit.create({
            name, amount, comment, paidAmount, date
        });

        return res.status(201).json({
            status: 'success',
            data: newCredit
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while creating a report',
            err: error.message,
        });
    }
}


export const getDailyCredit = async (req, res) => {
    try {
        const credit = await Credit.findAll({});


        return res.status(200).json({
            status: 'success',
            data: credit,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};


export const getCreditByUser = async (req, res) => {
    try {
        const credit = await Credit.findAll({
            attributes: [
                'name',
                [Sequelize.fn('SUM', Sequelize.col('amount')), 'totalCredit'],
                [Sequelize.fn('SUM', Sequelize.col('paidAmount')), 'totalPaid'],

            ],
            group: ['name'],
            raw: true,
        });
        return res.status(200).json({
            status: 'success',
            data: credit,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};