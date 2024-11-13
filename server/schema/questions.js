const mongoose = require("mongoose");

const queSchema = mongoose.Schema({
    type : Number,
    que : String,
    choices : [{id : String , text : String}],
    correct : String,
    quizId : String
})

const quesModel = mongoose.model("Question" , queSchema, "Questions");
module.exports = quesModel;