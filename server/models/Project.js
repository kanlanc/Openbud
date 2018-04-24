const express=require("express");

const ProjectSchema=new express.Schema({
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
    ],
    icon:{
        type:String //For now let it be a string but later use cloudinary to take the file from the site itself
    }
});



 module.exports = mongoose.model('Project', RepoSchema);