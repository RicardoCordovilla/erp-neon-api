const db = require('../../utils/database');
const signsControllers = require('./signs.controllers');
const productsControllers = require('../products/products.controllers');

const getAllSigns = (req, res) => {
    signsControllers.getAllSigns()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const getSignById = (req, res) => {
    const id = req.params.id;
    signsControllers.getSignById(id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const createSign = async (req, res) => {
    const { title, description, images, startProject, sale, signProducts } = req.body;
    try {
        if (!title || !description) {
            return res.status(404).json({
                message: 'Faltan campos',
                fields: {
                    title: 'String',
                    description: 'String',
                }

            });
        }
        else {
            const newSign = await signsControllers.createSign({ title, description, images, startProject, sale, signProducts })
            res.status(200).json({ newSign: newSign });
        }
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }

}


const updateSign = async (req, res) => {
    const { title, description, images, startProject, endProject, sale, cost } = req.body;
    const signId = req.params.id;
    try {
        const updatedSign = signsControllers.updateSign(signId, { title, description, images, startProject, endProject, sale, cost,updatedat: new Date() });
        return res.status(200).json({ updatedSign: signId });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const addProducts = async (req, res) => {
    const { signProducts, } = req.body;
    const signId = req.params.id;
    try {
        const updatedSign = signsControllers.addProducts(signId, { signProducts });
        for (const product of signProducts) {
            const { productId, quantity } = product;
            const existingProduct = await productsControllers.getProductById(productId);
            if (existingProduct)
                await productsControllers.updateProduct(productId, { stock: existingProduct.stock - quantity });
        }
        return res.status(200).json({ updatedSign: signId });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}



module.exports = {
    getAllSigns,
    getSignById,
    createSign,
    updateSign,
    addProducts
};


