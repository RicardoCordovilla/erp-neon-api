const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)

const productsServices = require('./products.services'); // Cambio de nombre del servicio

router.get('/', productsServices.getAllProducts); // Cambio de nombre de la función en el servicio
router.get('/id/:id', productsServices.getProductById); // Cambio de nombre de la función en el servicio

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    productsServices.createProduct // Cambio de nombre de la función en el servicio
);
router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    productsServices.updateProduct // Cambio de nombre de la función en el servicio
);

module.exports = router;
