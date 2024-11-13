const quesModel = require("../schema/questions");

const create_question = async(req,res) =>{

    const {ques} = req.body;
    
    try{
        const que = new quesModel({
            ...ques
        });

        await que.save();

        res.json({success : "success while creating question"})
    }catch(err){
        console.log("error while creating question : ", err);
        res.json({error : "error while creating question"})
    }
}

module.exports = {create_question}