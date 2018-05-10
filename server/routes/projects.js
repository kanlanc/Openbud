var express = require("express");
var router = express.Router();
var User = require("../models/User");
var Project = require("../models/Project");

// This route is for making a new project

router.post("/:userid/newproject", function(req, res, next) {
  var { name, gitlink, contributors, icon, description } = req.body;
  var owner=req.params.userid;
  var tags = getTags(req.body.description);
  var input = { name, gitlink, owner, icon, description };
  Project.create(input)
    .then(project => {
      console.log(project);
      // console.log(project.tags);
      if (contributors && contributors.length != 0)
        project.contributors.push(...contributors);
      project.tags.push(...tags);
      project.save();
      User.findById(req.params.userid)
        .then(user => {
          user.projects.push(project._id);
          user.save();
        })
        .catch(err => {
          console.log(err);
        });
      res.status(200).send(project);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

// This route is for making a viewing projects that belong to a particular user

router.get("/:userid/projects", function(req, res, next) {
  User.findById(req.params.userid)
    .populate("projects")
    .exec(function(err, user) {
      if (err) {
        console.log(err);
        res.status(501).send(err);
      } else {
        res.status(200).json(user.projects);
      }
    });
});

// This is to find a project and send back related information
router.get("/findproject/:projectid", function(req, res, next) {
    var id=req.params.projectid;
    Project.findById(id).populate("owner").populate("contributors").exec((err,project)=>{
        if(err)
        {
            console.log(err);
            res.status(501).send(err);
        }
        else{
            res.status(200).json(project);
        }
    })
})

/**
 * This route is to search projects based on tags
 *  TODO: using the tags obtained, find a method to rank the project that will be returned based on the tags
 * probably index should be used, check it out and ask others about it 
 */



function getTags(description) {
  // Send the description to the microservice of akash NLP to get the tags
  return ["node", "react"];
}

module.exports = router;
