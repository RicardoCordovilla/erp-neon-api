const customersControllers = require('./customers.controllers');

const getAllCustomers = (req, res) => {
    customersControllers.getAllCustomers()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const getCustomerById = (req, res) => {
    const id = req.params.id;
    customersControllers.getCustomerById(id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const createCustomer = (req, res) => {
    const { name, phone, alias, email, avatar } = req.body;
    if (name && phone) {
        customersControllers.createCustomer({ name, phone, alias, email, avatar })
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({ message: err.message });
            });
    } else {
        res.status(404).json({
            message: 'Faltan campos',
            fields: {
                name: 'Nombre del cliente(string)',
                phone: 'Teléfono del cliente(string)'
            }
        });
    }
}

const updateCustomer = (req, res) => {
    const { name, phone, alias, email, avatar } = req.body;
    const id = req.params.id;
    customersControllers.updateCustomer(id, { name, phone, alias, email, avatar, updatedat: new Date() })
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
};

