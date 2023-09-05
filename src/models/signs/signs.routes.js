const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)
const signsServices = require('./signs.services')

router.get('/', signsServices.getAllSigns)
router.get('/id/:id', signsServices.getSignById)

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    signsServices.createSign
)
router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    signsServices.updateSign
)
router.patch('/products',
    // passport.authenticate('jwt', { session: false }),
    signsServices.addProducts
)

module.exports = router

