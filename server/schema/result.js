const mongoose=require('mongoose');


const result = new mongoose.Schema({
    quizId : {type : String},
    responseId  : {type : String},
    userId : {type : String},
    firstname : {type : String},
    lastname : {type : String},
    title : {type : String},

    queResponses:[{
        points : Number,
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
        correct : {type : Boolean},
        choices : {type : mongoose.Schema.Types.Mixed}
    }],
   
    grades:{
        totalQuestions: Number,
        correctQuestions : Number,
        incorrectQuestions: Number,
        totalPoints : Number,
        earnedPoints : Number,
        percentage: Number,
      },

    timeSpent : Number,
    finishTime : Date
});

const resultModel = mongoose.model('result',result)
module.exports= resultModel;
