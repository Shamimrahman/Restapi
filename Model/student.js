const mongoose=require("mongoose")
const validator = require('validator');


//schema start -> 
//scehma holo field er val ki type hbe ta define korar nam ai

const StudentSchema= new mongoose.Schema({
    name:{
        //must be string hoite hobe
        //validation
        type:String,
        required:true,
        minlength:[2,"Min two Letters"],
        maxlength:30
    },
    
    email:{
        type:String,
        required:true,
        unique:true,

        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Mail")
            }
        }

    },

    phone:{
        type:Number,
        
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
    
})

//Schema ENd

//create collection Start

const Student=new mongoose.model("Student",StudentSchema)
module.exports=Student
//express part a lagbe
//create collection end