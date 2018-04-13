const express=require("express");

const RepoSchema=new express.Schema({
    name:{
        type:String,
        requried:true
    },
    gitlink:{
        type:String,
        requried:true
    },
    owner:{
        type:String,
        required:true
    },
    contributors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
        }
    ]
});



 module.exports = mongoose.model('Repo', RepoSchema);