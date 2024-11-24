const resModel = require("../schema/response");

const create_response = async(req,res) => {

    const {userId,quizId} = req.body;

    try{

        const newRes = new resModel({
            createdAt : Date.now(),
            quizId : quizId,
            userId : userId
        })

        await newRes.save();

        res.json({success : "created this response", response : newRes})
    }catch(err){
        console.log("error while creating response : ", err);
    }
}

const get_response = async(req,res) => {
    const {userId, quizId} = req.query;

    try{
        const result = await resModel.findOne({userId : userId, quizId : quizId});

        if(result){
            res.json({success : "found response", response : result});
        }else{
            res.json({warning : "can't find quiz"})
        }
    }catch(err){
        console.log("error finding response" , err);
        res.json({error : "Internal server error"});
    }
}

const update_response = async(req,res) =>{
    const {responseId ,updated} = req.body;

    try{
        const result = await resModel.updateOne({_id : responseId}, {$set : {...updated}});

        if(result.modifiedCount){
            res.json({success : "updated response successfully"});
        }else{
            res.json({error : "an error occured while updating"})
        }
    }catch(err){
        console.log("an error occured updating response ", err);
        res.json({error : "Internal server error"})
    }
}

module.exports = {create_response, get_response, update_response}