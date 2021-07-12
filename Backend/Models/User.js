const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
email: {
    type : String,
    min : 6, 
    max :255
},
password: {
    type : String,
    min : 6,
    max: 1024
},
date: {
    type : Date,
    default : Date.now
}
})

module.exports =mongoose.model('User',userSchema);