const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)
const assistanceServices = require('./assistance.services')

router.post('/', 
    // passport.authenticate('jwt', { session: false }),
    assistanceServices.createAssistance)

router.get('/date/:id',
    // passport.authenticate('jwt', { session: false }),
    assistanceServices.getAssistancesByDateUser)

// router.get('/week/:week/user/:id',
//     passport.authenticate('jwt', { session: false }),
//     assistanceServices.getAssitancesByWeekUser)

router.get('/rangedate/:userid',
    // passport.authenticate('jwt', { session: false }),
    assistanceServices.getAssistancesDateRangeByUser)

router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    assistanceServices.updateAssistance)

router.patch('/hourOut/:id',
    // passport.authenticate('jwt', { session: false }),
    assistanceServices.registerHourOut)

router.delete('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    assistanceServices.deleteAssistance)

module.exports = router