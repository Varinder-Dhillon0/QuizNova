//entry point of app
const express = require("express");
const app = express();
const testRouter = require("./routes/test");

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/" , (req,res) =>{
    res.json({msg : "hey there"});
})

app.use(testRouter);

app.listen(5000, () =>{
    console.log("App started on port 5000");
})