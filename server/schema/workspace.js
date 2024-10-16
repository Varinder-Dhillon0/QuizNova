const mongoose = require("mongoose");

const workspace = mongoose.Schema({
    title : String,
    quizzes : []
})