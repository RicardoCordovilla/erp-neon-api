const productsControllers = require('./products.controllers'); // Cambio de nombre del controlador

const getAllProducts = (req, res) => { // Cambio de nombre de la función
    productsControllers.getAllProducts() // Cambio de nombre de la función en el controlador
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const getProductById = (req, res) => { // Cambio de nombre de la función
    const id = req.params.id;
    productsControllers.getProductById(id) // Cambio de nombre de la función en el controlador
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

const createProduct = (req, res) => { // Cambio de nombre de la función
    const { name, price, unity, stock, service } = req.body; // Cambio de nombres de atributos
    if ((name && price && unity) !== undefined) {
        productsControllers.createProduct({ name, price, unity, stock, service }) // Cambio de nombres de atributos en el controlador
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
                name: 'Nombre del producto(string)',
                price: 'Precio del producto(number)',
                unity: 'Unidad de medida del producto(string)',
            }
        });
    }
}

const updateProduct = (req, res) => { // Cambio de nombre de la función
    const { name, price, unity, stock, service } = req.body; // Cambio de nombres de atributos
    const id = req.params.id;
    productsControllers.updateProduct(id, { name, price, unity, stock, service }) // Cambio de nombres de atributos en el controlador
        .then(response => {
            productsControllers.getProductById(id)
                .then(data => {
                    res.status(200).json(data);
                })
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
};
