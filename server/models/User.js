

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var Project = require("./Project");



var userSchema = new Schema({
    name : {type : String,required: true},
    username : {type : String, unique: true, required: true},
    email : {type : String, unique: true, required: true},
    password : {type : String,required : true},
    projects:[{type:mongoose.Schema.Types.ObjectId,ref:Project}],
    bookmarkeredprojects:[{type:mongoose.Schema.Types.ObjectId,ref:Project}],
    // friends:[{type:mongoose.Schema.Types.ObjectId,ref:User,}]
});

userSchema.methods.verifyPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, res) {
        if (err) {
            callback(err, null);
        }
        else if(!res){
            callback("Incorrect Password!",false);
        }
        else {
            callback(res, true);
        }
    });
};


module.exports = mongoose.model('user', userSchema);
