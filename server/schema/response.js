const mongoose = require("mongoose");

const responseSchema = mongoose.Schema({
    createdAt: {
        type: Date,
    },
    selectedQue : Number,
    submitted : Boolean,
    quizResponse : [{
        queId : {
            type : String,
        },
        correct : {
            type: mongoose.Schema.Types.Mixed,
        },
        notsure: {
            type: Number,
        }
    }],
    endedAt : {
        type: Date,
        default: Date.now
    },
    userId : {
        type : String,
    },
    quizId : {
        type: String
    }
})

const resModel = mongoose.model("Response" , responseSchema, "responses")
module.exports = resModel;