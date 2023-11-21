const mongoose=require("mongoose")
//const uniqueValidator=require("mongoose-unique-validator")
const userSchema=mongoose.Schema({
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    role:{type:String,require:true,  enum: ['admin', 'user']},
})
//userSchema.plugin(uniqueValidator)
userSchema
.virtual('name')
.get(function () {
  return this.firstname + ' ' + this.lastname;
})

userSchema.methods.toPublic = function() {
 delete this.password
  return this.name;
};
module.exports=mongoose.model("User",userSchema)