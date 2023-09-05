const uuid = require('uuid');
const Customers = require('./customers.model'); // Importa el modelo de Customers

const getAllCustomers = async () => {
    const data = await Customers.findAll({
        order: [['updatedAt', 'DESC']],
    });
    return data;
}

const getCustomerById = async (id) => {
    const data = await Customers.findByPk(id);
    return data;
}

const createCustomer = async (data) => {
    const newCustomer = await Customers.create({
        name: data.name,
        phone: data.phone,
        alias: data.alias,
        avatar: data.avatar,
    });
    return newCustomer;
}

const updateCustomer = async (id, body) => {
    const result = await Customers.update(body, {
        where: { id }
    });
    return result;
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
};
