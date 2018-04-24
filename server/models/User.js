
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Project = require("./Project");



var userSchema = new Schema({
    name : {type : String,required: true},
    username : {type : String, unique: true, required: true},
    password : {type : String,required : true},
    projects:[{type:mongoose.Schema.Types.ObjectId,ref:Project}],
    bookmarkeredprojects:[{type:mongoose.Schema.Types.ObjectId,ref:Project}],
    friends:[{type:mongoose.Schema.Types.ObjectId,ref:User,}]
});


module.exports = mongoose.model('user', userSchema);
