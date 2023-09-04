const uuid = require('uuid')
const Signs = require('./signs.model')
const Products = require('../products/products.model')
const { sign } = require('jsonwebtoken')

const getAllSigns = async () => {
    const data = await Signs.findAll({
        // include: [{
        //     model: Products,
        //     through: { attributes: [] }
        // }]
    })
    return data
}

const getSignById = async (id) => {
    const data = await Signs.findOne(
        { where: { id } }
    )
    return data
}

const createSign = async (data) => {
    const newSign = await Signs.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        images: data.images,
        sale: data.sale,
        cost: data.cost,
        signProducts: data.signProducts,
    });
    return newSign;
};

const updateSign = async (id, body) => {
    const result = await Signs.update(body, {
        where: { id }
    })
    return result
}


module.exports = {
    getAllSigns,
    getSignById,
    createSign,
    updateSign,
}

