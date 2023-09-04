
const { DataTypes } = require('sequelize')
const db = require('../../utils/database')
const Signs = require('../signs/signs.model')

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    unity: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stock: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null
    },
    service: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },

}, { timestamps: false })

// Products.belongsToMany(Signs,
//     {
//         through: 'signProducts'
//     })

Products.sync({ alter: true })

module.exports = Products

