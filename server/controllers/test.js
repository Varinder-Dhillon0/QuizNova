
const test = async (req , res) =>{
    console.log(req.body);

    res.json({msg : "received"});
}

module.exports = {test};