
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Repo = require("./Repo");



var userSchema = new Schema({
    name : {type : String,required: true},
    username : {type : String, unique: true, required: true},
    password : {type : String,required : true},
    repos:[{type:mongoose.Schema.Types.ObjectId,ref:Repo}],
    friends:[{type:mongoose.Schema.Types.ObjectId,ref:User,}]
});


module.exports = mongoose.model('user', userSchema);
