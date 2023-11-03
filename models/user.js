const mongoose=require("mongoose")
//const uniqueValidator=require("mongoose-unique-validator")
const userSchema=mongoose.Schema({
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    role:{type:String,require:true,  enum: ['admin', 'user']},
})
module.exports=mongoose.model("User",userSchema)