// este modelo es para los signs
const { DataTypes } = require('sequelize')
const db = require('../../utils/database');
const Products = require('../products/products.model');

const Signs = db.define('signs', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    sale: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0
    },
    cost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0
    },
    signProducts: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        // references: {
        //     model: Products,
        //     key: 'id'
        // },
        allowNull: true,
        defaultValue: [],
    }

}, { timestamps: false })

// Signs.hasMany(Products, { through: 'signProducts' });
// Products.belongsTo(Signs, { through: 'signProducts' });


Signs.sync({ alter: true })
module.exports = Signs


