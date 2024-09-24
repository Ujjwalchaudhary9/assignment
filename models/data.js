const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let dataSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    mobileNo:{type:String},
    pass:{type:String},
    confirmPassword:{type:String}
})
module.exports=mongoose.model('data',dataSchema);