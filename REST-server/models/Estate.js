const mongoose = require('mongoose')

const EstateSchema = new mongoose.Schema({
    title:{
        type:String,
        maxLength: [50, 'Title is required and must be 50 characters or less'],
        required:true
    },
    mainPhoto:{
        type:String,
        validate: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,'Please insert a valid link'],
        required:true
    },
    secondPhoto:{
        type:String,
        validate: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,'Please insert a valid link'],
        required:true
    },
    thirdPhoto:{
        type:String,
        validate: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,'Please insert a valid link'],
        required:true
    },
    address:{
        type:String,
        maxLength:[30,'Address is required and must be 30 characters or less'],
        required:true
    },
    meters:{
        type:Number,
        maxLength:[4,"Meters is required and must be 4 digits or less"],
        required:true
    },
    rooms:{
        type:Number,
        maxLength:[2,"Rooms is required and must be 2 digits or less"],
        required:true
    },
    baths:{
        type:Number,
        maxLength:[2,"Baths is required and must be 2 digits or less"],
        required:true
    },
    description:{
        type:String,
        maxLength:[600,"Description is required and must be 600 characters or less"],
        required:true,
    },
    types:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        maxLength:[9,"Price is required and must be 9 digits or less"],
        required:true
    },
    location:{
        type:Number,
        maxLength:[30,"Location is required and must be 30 characters or less"],
        required:true
    },
    _ownerId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
    
})

const Estate = mongoose.model('Estate',EstateSchema)

module.exports = Estate;
