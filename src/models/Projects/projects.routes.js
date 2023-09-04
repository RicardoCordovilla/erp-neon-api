const router = require('express').Router()
const passport = require('passport')
require('../../middlewares/auth.middleware')(passport)
const projectsServices = require('./projects.services')

router.get('/', projectsServices.getAllProjects)
router.get('/id/:id', projectsServices.getProjectById)
router.get('/customer/:id', projectsServices.getProjectByCustomerId)

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    projectsServices.createProject
)

router.patch('/id/:id',
    // passport.authenticate('jwt', { session: false }),
    projectsServices.updateProject
)

module.exports = router
