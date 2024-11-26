const {workspaceModel} = require("../schema/workspace")

const create_workspace = async(req,res) => {
    const {title, creator} = req.body;

    try{
        const workspace = new workspaceModel({creator : creator,title : title , created_at : new Date()});
        await workspace.save();

        res.json({success : "workspace created successfully"});
    }catch(err){
        console.log("error while creating workspace" + err);
        res.json({error : "internal server error"})
    }
}

const get_workspaces = async(req,res) =>{

    const {creator} = req.query;

    try{
        const workspaces = await workspaceModel.find({creator : creator});

        res.json({success : "" , workspaces})
    }catch(err){
        console.log("error while getting workspace" + err);
        res.json({error : "internal server error"})
    }
}

const update_workspace = async(req,res) =>{

    const {id,title} = req.body;

    try{
        const update = await workspaceModel.updateOne(
            { _id: id }, 
            { $set: { title: title } }
        );

        if(update.modifiedCount){
            console.log(update)
            res.json({success : "updated workspace", update : {id, title}})
        }else{
            res.json({error : "error updating workspaces"})
        }
        
    }catch(err){
        console.log("error updating workspace title : ", err);
        res.json({error : "error updating workspaces"})
    }
}

const delete_workspace = async(req,res) =>{

    const {id} = req.body;

    try{
        const update = await workspaceModel.deleteOne(
            { _id: id }, 
        );

        if(update.modifiedCount){
            res.json({success : "deleted workspace"})
        }else{
            res.json({error : "error deleting workspaces"})
        }
        
    }catch(err){
        console.log("error deleting workspace title : ", err);
        res.json({error : "error deleting workspaces"})
    }
} 

module.exports = {create_workspace, get_workspaces, update_workspace, delete_workspace}