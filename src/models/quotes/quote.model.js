const {DataTypes} = require('sequelize');
const db = require('../../utils/database');

const Quote = db.define('quote', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    customerRuc: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    customerEmail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    customerPhone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    customerAddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    articles: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
    }

});

module.exports = Quote;
