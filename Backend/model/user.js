const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userschema=new Schema({
    email:String,
   password:String
    
});
const userdata=mongoose.model('userdetail',userschema);
module.exports=userdata;