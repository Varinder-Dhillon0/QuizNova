//entry point of app
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./routes/test");
const userRouter = require("./routes/users")
const {connectDb} = require("./utils/mongodb")

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

app.listen(5000, () =>{
    console.log("App started on port 5000");
})