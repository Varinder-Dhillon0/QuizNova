const mongoose=require('mongoose');


const result = new mongoose.Schema({
    quizId : {type : String},
    responseId  : {type : String},
    userId : {type : String},
    firstname : {type : String},
    lastname : {type : String},

    queResponses:[{
        queType : Number,
        queId: String,
        userResId: String,
        que: String,
        expectedAns: {
            type : mongoose.Schema.Types.Mixed
        },
        userAns: {
            type : mongoose.Schema.Types.Mixed
        },
    }],
   
    grades:{
        totalQuestions: Number,
        correctQuestions : Number,
        incorrectQuestions: Number,
        totalPoints : Number,
        earnedPoints : Number,
        percentage: Number,
      },


});

const resultModel = mongoose.model('result',result)
module.exports= resultModel;
