const { default: mongoose } = require("mongoose");

const quizSchema = new mongoose.Schema({
    quizThumbnail: String,
    title : String,
    desc : String,
    timeLimit : Number,
    category : [],
    published : {type : Number,default : 0},
    settings : {
        shuffleQues : Boolean,
        adaptiveQueBank : Boolean,
        shuffleOptions : Boolean,
        showQueAnswers : Boolean
    },
    created_at : Date,
    workspace : String,
    creator : String,
    startTime : Date,
    lineantTime : Number,
    questions : [{
        imageUrl : String,
        type : {type : Number},
        que : {type : String},
        choices : [{id : Number , text : String}],
        correct :  {
            type: mongoose.Schema.Types.Mixed,
        },
        points : {type : Number,default : 1},
        randomizedOptions : {type : Number , default : 0},
        required : {type : Boolean, default : true }
    }]
})

const quizModel = mongoose.model("Quiz" , quizSchema, "Quizzes");
module.exports = quizModel;