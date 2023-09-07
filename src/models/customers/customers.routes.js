const router = require('express').Router();
const passport = require('passport');
require('../../middlewares/auth.middleware')(passport);

const customersServices = require('./customers.services');

router.get('/', customersServices.getAllCustomers);
router.get('/id/:id', customersServices.getCustomerById);

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    customersServices.createCustomer
);

router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    customersServices.updateCustomer
);

router.delete('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    customersServices.deletedCustomer
);

module.exports = router;
