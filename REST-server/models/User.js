const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required'],
        maxLength: [40,'Email must be 40 characters or less'],
        validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please insert a valid Email"],
    },
    firstName:{
        type:String,
        required:[true,'First Name is required'],
        maxLength: [40,'First Name must be 40 characters or less'],
        validate:[/^[a-zA-Z]+$/,"Please insert a valid Name"],
    },
    lastName:{
        type:String,
        required:[true,'Surname is required'],
        maxLength: [40,'Surname must be 40 characters or less'],
        validate:[/^[a-zA-Z]+$/,"Please insert a valid Surname"],
    },
    password:{
        type:String,
        minLength: [6,"Password must be at least 6 characters long"],
        required:[true,'Surname is required'],
    }
})

userSchema.pre('save', async function (){
    const hash = await bcrypt.hash(this.password,20)

    this.password = hash
})

userSchema.virtual('rePassword').set(function(value){
    if(value !== this.password){
        throw new Error ('Passwords missmatch!')
    }
})

userSchema.path('email').validate(async (email)=>{
    const count = await mongoose.models.User.countDocuments({email})

    return !count
},'User with this username already exsist')

const User = mongoose.model('User',userSchema)

module.exports = User