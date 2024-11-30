const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    address:String,
    password:String,
    phone:String
})
const UserData=mongoose.model('Userdata',UserSchema)
module.exports=UserSchema;