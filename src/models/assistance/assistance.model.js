const {DataTypes} = require('sequelize');
const db = require('../../utils/database');

const Assistance = db.define('assistance', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hourIn: {
        type: DataTypes.STRING,
        allowNull: false
    },

    breakIn: {
        type: DataTypes.STRING,
        allowNull: true
    },
    breakOut: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    hourOut: {
        type: DataTypes.STRING,
        allowNull: true
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {timestamps: false})

Assistance.sync({alter: true})

module.exports = Assistance


