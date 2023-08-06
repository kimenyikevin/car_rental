import model from '../database/models';
import { Op, Sequelize } from 'sequelize';

const Report = model.Report;

export const creteReport = async (req, res) => {
    try {
        const { beverage, food, damages, tokenBiyali, expenses, pos, credit } = req.body;
        const totalRecieved = (Number(beverage) + Number(food) + Number(tokenBiyali)) - Number(expenses) - Number(credit) - Number(damages);


        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to midnight to represent the start of the day.

        const result = await Report.findOne({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('*')), 'count'],
            ],
            where: {
                createdAt: {
                    [Sequelize.Op.gte]: today,
                },
            },
            raw: true,
        });

        const dataCreatedToday = result.count > 0;
        if (dataCreatedToday) {
            return res.status(401).json({
                status: 'fail',
                message: 'Report has been created today',
            });
        }
        const newReport = await Report.create({
            beverage, food, damages, tokenBiyali, expenses, pos, credit, totalRecieved,
        });

        return res.status(201).json({
            status: 'success',
            data: newReport
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while creating a report',
            err: error.message,
        });
    }
}


export const getDailyRepport = async (req, res) => {
    try {
        const report = await Report.findAll({});
        return res.status(200).json({
            status: 'success',
            data: report,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};


export const getAllreportAndCount = async (req, res) => {
    try {
        const result = await Report.findAll({
            attributes: [
                [Sequelize.fn('SUM', Sequelize.col('beverage')), 'beverage'],
                [Sequelize.fn('SUM', Sequelize.col('food')), 'food'],
                [Sequelize.fn('SUM', Sequelize.col('damages')), 'damages'],
                [Sequelize.fn('SUM', Sequelize.col('tokenBiyali')), 'tokenBiyali'],
                [Sequelize.fn('SUM', Sequelize.col('expenses')), 'expenses'],
                [Sequelize.fn('SUM', Sequelize.col('pos')), 'pos'],
                [Sequelize.fn('SUM', Sequelize.col('credit')), 'credit'],
                [Sequelize.fn('SUM', Sequelize.col('totalRecieved')), 'totalRecieved']
            ],
            raw: true,
        });
        return res.status(200).json({
            status: 'success',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
}


export const removeReport = async (req, res) => {
    try {
        const report = await Report.findOne({
            where: {
                uuid: req.params.id,
            },
        });
        if (!report) {
            return res.status(404).json({
                status: 'error',
                error: 'Report not found',
            });
        }

        await report.destroy();
        res.status(200).json({
            status: 'success',
            message: 'Report deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: error.message,
        });
    }
};
