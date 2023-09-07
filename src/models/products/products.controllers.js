const uuid = require('uuid');
const Products = require('./products.model'); // Importa el modelo de Products

const getAllProducts = async () => {
    const data = await Products.findAll({ order: [['name', 'ASC']] });
    return data;
};

const getProductById = async (id) => {
    const data = await Products.findByPk(id);
    return data;
};

const createProduct = async (data) => {
    const newProduct = await Products.create({
        name: data.name,
        price: data.price,
        unity: data.unity,
        stock: data.stock,
        service: data.service,
    });
    return newProduct;
};

const updateProduct = async (id, body) => {
    const result = await Products.update(body, {
        where: { id }
    });
    return result;
};

const deletedProduct = async (id) => {
    const result = await Products.destroy({
        where: { id }
    });
    return result;
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deletedProduct
};
