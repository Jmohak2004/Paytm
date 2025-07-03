const express = require('express')
const router = express.Router();

router.post('/',async(req,res)=>{
    const {firstName,lastName,email,password} = req.body;

     await userModel.create({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
     });

     res.json({
        message : "succbbbess"
     })
})