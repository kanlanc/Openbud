const express = require("express");
const User = require("./User");
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true
  },
  gitlink: {
    type: String,
    requried: true
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  description: {
    type: String,
    required: true
  },
  contributors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      default: []
    }
  ],
  icon: {
    type: String, //For now let it be a string but later use cloudinary to take the file from the site itself
    default: null
  },
  tags: [
    {
      type: String,
      default: []
    }
  ]
});

module.exports = mongoose.model("Project", ProjectSchema);
