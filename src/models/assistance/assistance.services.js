const db = require('../../utils/database');
const assistanceControllers = require('./assistance.controllers');
const usersControllers = require('../users/users.controllers');


const getAssistancesByDateUser = (req, res) => {
    const date = req.query.date;
    const userId = req.params.id;
    assistanceControllers.getAssistancesByDateUser(date, userId)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const getAssitancesByWeekUser = (req, res) => {
    const { week } = req.body;
    const userId = req.params.id;
    assistanceControllers.getAssistanceByWeekUser(week, userId)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}


const getAssistancesDateRangeByUser = (req, res) => {
    const { dateFrom, dateTo } = req.query;
    const userId = req.params.userid;
    assistanceControllers.getAssistanceDateRangeByUser(dateFrom, dateTo, userId)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}



const createAssistance = async (req, res) => {
    const { date, hourIn, hourOut, notes, images, userId, location } = req.body;
    try {
        if (!date || !hourIn || !userId) {
            return res.status(404).json({
                message: 'Faltan campos',
                fields: {
                    date: 'String',
                    hourIn: 'String',
                    userId: 'String'
                }

            });
        }
        else {
            const newAssistance = await assistanceControllers.createAssistance({ date, hourIn, hourOut, notes, images, userId, location })
            res.status(200).json({ newAssistance: newAssistance });
        }
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }

}

const registerHourOut = async (req, res) => {
    const { hourOut } = req.body;
    const assistanceId = req.params.id;
    try {
        const updatedAssistance = assistanceControllers.updateAssistance(assistanceId, { hourOut });
        return res.status(200).json({ updatedAssistance: assistanceId });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}


const updateAssistance = async (req, res) => {
    const { date, hourIn, hourOut, notes, images, userId } = req.body;
    const assistanceId = req.params.id;

    try {
        const updatedAssistance = assistanceControllers.updateAssistance(assistanceId, { date, hourIn, hourOut, notes, images, userId, updatedat: new Date() });
        return res.status(200).json({ updatedAssistance: assistanceId });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const deleteAssistance = async (req, res) => {
    const assistanceId = req.params.id;
    try {
        const deletedAssistance = assistanceControllers.deleteAssistance(assistanceId);
        return res.status(200).json({ deletedAssistance: assistanceId });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports = {
    getAssistancesByDateUser,
    getAssitancesByWeekUser,
    getAssistancesDateRangeByUser,
    createAssistance,
    registerHourOut,
    updateAssistance,
    deleteAssistance
}

