const router = require('express').Router();
const estateManager = require('../managers/estateManager')

router.post('/',async (req,res)=>{
    try {
        const estateData = req.body
        console.log(req.user);
        await estateManager.create(estateData)
    } catch (error) {
        
    }
})

module.exports = router