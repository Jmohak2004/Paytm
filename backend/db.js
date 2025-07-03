const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mohakj:Uday2004@cluster0.4yxrbss.mongodb.net/nemdb')
.then(()=>{
    console.log("Mongodb connected successfully");
})
.catch((err)=>{
    console.log(`Error ${err}`)
})

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        maxLength : 60
    },
    lastName : {
        type : String,
        required : true,
        maxLength : 60
    },
    email : {
        unique : true,
        required : true,
        type : String
    },
    password : {
        minLength: 6,
        required : true,
        type : String
    },

})

const userModel = mongoose.model('users',userSchema);
module.exports({userModel})