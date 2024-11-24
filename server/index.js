//entry point of app
const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./routes/test");
const userRouter = require("./routes/users")
const workspaceRouter = require("./routes/workspace")
const quizRouter = require("./routes/quiz");
const resRouter = require("./routes/response");
const {connectDb} = require("./utils/mongodb");

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

connectDb();

const allowedOrigin = "http://localhost:5173"

app.use(cors({
    origin : allowedOrigin,
    credentials : true
}))

app.get("/" , (req,res) =>{
    res.json({msg : "kwkdn"});
})

app.use(testRouter);
app.use(userRouter);
app.use(workspaceRouter);
app.use(quizRouter);
app.use(resRouter);

app.listen(5000, () =>{
    console.log("App started on port 5000");
})