const router = require('express').Router();

router.post('/register',async(req,res)=>{
    const {email,firstName,lastName,password,rePassword} = req.body
    console.log(email,firstName,lastName,password,rePassword);
})

module.exports = router