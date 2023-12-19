const router = require('express').Router();
const estateController = require('./controllers/estateController')
const userController = require('./controllers/userController')

router.use('/users',userController)
router.use('/data/estates',estateController)

module.exports = router