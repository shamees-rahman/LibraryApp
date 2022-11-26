const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://Shamees:privacytermsmongodb@cluster0.vbrm5tw.mongodb.net/test?retryWrites=true&w=majority")

const studentschema = mongoose.Schema({
    name: {
        type:String, required:true
    },
    rollno: {
        type:String, required:true
    },
    admno: {
        type:String, required:true
    },
    college: {
        type:String, required:true
    }
})

var studentmodel = mongoose.model('students',studentschema);
module.exports = studentmodel