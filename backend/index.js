const express = require("express");
const app = express()
const mainRouter = require('./routes/index')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');


app.use(cors())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://mohakj:Uday2004@cluster0.4yxrbss.mongodb.net/nemdb')
// .then(()=>{
//     console.log("Mongodb connected successfully");
// })
// .catch((err)=>{
//     console.log(`Error ${err}`)
// })

// const userSchema = mongoose.Schema({
//     firstName : {
//         type : String,
//         required : true,
//         maxLength : 60
//     },
//     lastName : {
//         type : String,
//         required : true,
//         maxLength : 60
//     },
//     email : {
//         unique : true,
//         required : true,
//         type : String
//     },
//     password : {
//         minLength: 6,
//         required : true,
//         type : String
//     },

// })

// const userModel = mongoose.model('users',userSchema)

app.use('/api/v1',mainRouter)

// app.post('/api/v1',async (req,res)=>{
    
//     const {firstName,lastName,email,password} = req.body;

//      await userModel.create({
//         firstName : firstName,
//         lastName : lastName,
//         email : email,
//         password : password
//      });

//      res.json({
//         message : "succbbbess"
//      })
// })

app.listen(3010)