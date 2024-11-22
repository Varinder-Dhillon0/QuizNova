const {uploadImage} = require("../utils/multer")
const quizModel = require("../schema/quiz");
const { workspaceModel } = require("../schema/workspace");

const create_quiz = async(req,res) =>{

    const { creator, workspace_id } = req.query;
    const quiz_data = { ...req.body, quizThumbnail: req.file ? req.file.filename : null };
    
    console.log(workspace_id)

    const workspace = await workspaceModel.findOne({creator : creator,_id : workspace_id});

    if(!workspace){
        res.json({error : "workspace not found"});
    }

    console.log("workspace passed");

    try{
        
        const quiz = new quizModel({
            workspace : workspace_id,
            ...quiz_data,
            questions : [],
            created_at : new Date(),
            creator : creator
        })

        await quiz.save();

        console.log("workspace passed");

        res.json({success : "created quiz"})
    }catch(err){
        console.log("error while creating quiz : " + err);
        res.json({error : "Internal server error"});
    }
}

const get_quizzes = async(req,res) =>{

    const {workspace, creator} = req.query;
    // console.log(workspace);

    try{
        const result = await quizModel.find({workspace : workspace, creator : creator});

        if(result){
            res.json({success : "found quizzes" , quizzes : result})
        }
        
    }catch(err){
        console.log(err);
        res.json({error : "an error occured"});
    }
}

const get_quiz = async(req,res) =>{

    const {id} = req.query;

    try{
        const result = await quizModel.findOne({_id : id});
        console.log(result)
        if(result){
            res.json({success : "found quiz" , quiz : result})
        }
        
    }catch(err){
        console.log(err);
        res.json({error : "an error occured"});
    }
}

const update_quiz = async(req,res) =>{

    const {updated , id} = req.body;
    
    try{
        const result = await quizModel.updateOne({_id : id} ,{$set : {...updated}});
        console.log(updated.questions);
        if(result){
            res.json({success : "done"})
        }
    }catch(err){
        console.log(err);
        res.json({error : "an error occured"});
    }
}

module.exports = {create_quiz , get_quizzes, get_quiz, update_quiz};