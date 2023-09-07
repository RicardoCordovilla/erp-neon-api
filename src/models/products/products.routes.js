const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)

const productsServices = require('./products.services'); 

router.get('/', productsServices.getAllProducts); 
router.get('/id/:id', productsServices.getProductById); 

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    productsServices.createProduct 
);
router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    productsServices.updateProduct 
);

router.delete('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    productsServices.deletedProduct
);

module.exports = router;
