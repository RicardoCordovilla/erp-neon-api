const { DataTypes } = require('sequelize');
const db = require('../../utils/database');

const Projects = db.define('projects', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    confirmationDate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
    },
    sale: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: '',
    },
    pays: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
    },
    projectSigns: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
    },
    instalationDate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estimatedEnd: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    additionalProducts: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: '',
    },
    otherContacts: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
    },
}, { timestamps: false });

module.exports = Projects;

// Projects.hasMany(Signs, {
//     foreignKey: 'projectId', // La clave foránea que se creará en el modelo Signs
//     as: 'projectSigns', // Alias para acceder a los signos relacionados desde un proyecto
// });

Projects.sync({ alter: true });
