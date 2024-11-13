const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
    title : String,
    created_at : Date,
    creator : String
})

const workspaceModel = mongoose.model("Workspace" , workspaceSchema ,"Workspace");
module.exports = {workspaceModel};