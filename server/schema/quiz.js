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
        passMarks : Number,
        pickQuesRandom : Boolean,
        showAnswer : Boolean
    },
    created_at : Date,
    workspace : String,
    creator : String,
    startTime : Date,
    lineantTime : Number,
    questions : [{
        type : {type : Number},
        que : {type : String},
        choices : [{id : Number , text : String}],
        correct :  {
            type: mongoose.Schema.Types.Mixed,
        },
        points : {type : Number,default : 1},
        randomizedOptions : {type : Number , default : 0}
    }]
})

const quizModel = mongoose.model("Quiz" , quizSchema, "Quizzes");
module.exports = quizModel;