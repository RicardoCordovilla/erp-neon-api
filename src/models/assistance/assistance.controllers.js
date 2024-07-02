const uuid = require('uuid')
const Assistance = require('./assistance.model')
const Users = require('../users/users.model')
const { Op } = require('sequelize')

const getAssistancesByDateUser = async (date, userId) => {
    const data = await Assistance.findOne({
        where: { date, userId }
    })
    return data
}

const getAssistanceByWeekUser = async (week, userId) => {
    const data = await Assistance.findAll({
        where: { week, userId }
    })
    return data
}

const getAssistanceDateRangeByUser = async (dateFrom, dateTo, userId) => {
    const data = await Assistance.findAll({
        where: { date: { [Op.between]: [dateFrom, dateTo] }, userId },
        order: [['date', 'ASC']]
    })
    return data
}

const createAssistance = async (data) => {
    const newAssistance = await Assistance.create({
        id: data.id ?? uuid.v4(),
        date: data.date,
        hourIn: data.hourIn,
        hourOut: data.hourOut,
        notes: data.notes,
        images: data.images,
        userId: data.userId,
        location: data.location
    });
    return newAssistance;
}

const updateAssistance = async (id, body) => {
    const result = await Assistance.update(body, {
        where: { id }
    })
    return result
}

const registerHourOut = async (id, hourOut) => {
    const result = await Assistance.update({ hourOut }, {
        where: { id }
    })
    return result
}

const deletedAssistance = async (id) => {
    const result = await Assistance.destroy({
        where: { id }
    })
    return result
}

module.exports = {
    getAssistancesByDateUser,
    getAssistanceByWeekUser,
    getAssistanceDateRangeByUser,
    createAssistance,
    updateAssistance,
    registerHourOut,
    deletedAssistance
}