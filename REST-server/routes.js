const router = require('express').Router();
const  estateController = require('./controllers/estateController')

router.use('/estates',estateController)

module.exports = router