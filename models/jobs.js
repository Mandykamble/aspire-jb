const mongoose = require("mongoose")

const Job = new mongoose.Schema({
    name:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    work:{
        type:String,
        required :[true,"Please provide your Type of work"]  
    },

    description:{
        type:String,
        required:[true,"Description field is required"]
    },
    isAvaiable:{

        type: Boolean,
        default:true
    },
    workmode :{
        type:String,
        // required :[true,"Please provide your workmode"] ,
        
    },
    address:{
        type:String,
        // required :[true,"Please provide your address"]  
    },
    workid:{
        type:Number,
        // required :[true,"Please provide your workid"]  

    },
    key:{
        type:String
    },
    location:{
        
        type:String
    }
});


const Employer = mongoose.model("Job",Job); 
module.exports = Employer