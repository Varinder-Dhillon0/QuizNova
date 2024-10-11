const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userModel } = require("../schema/users");

const generate_jwt = (name, email) => {

    const token = jwt.sign({ name, email }, "wnrikwebffhiu", {
        expiresIn: "1d",
        algorithm: "HS256",
    });
    return token;
};

const validate_user = async(req,res) =>{

    const {token } = req.body;

    try{
        const validated = jwt.verify(token, "wnrikwebffhiu");
        if(validated){
            res.json({success : "user authenticated successfully" , ...validated})
        }else{
            res.json({error : "an error occured while authenticating user"})
        }
    }catch(err){
        console.log("error while validating user : " , err);
        res.json({error : "an error occured while authenticating user"})
    }
    
}

const register_user = async (req, res) => {
    
    const { name, email, password, mobile, gender } = req.body;

    //checking if user exists in database 
    const userExists = await userModel.findOne({ email: email });

    if (userExists) {
        res.json({ warning : "user is already registered" });
        return;
    }
    
    //saving user
    try {
        const hashed_pass = await bcrypt.hash(password, 11);
        const time = new Date();

        const user = new userModel({
            name: name,
            email: email,
            password: hashed_pass,
            registered_at : time,
            mobile: mobile,
            gender: gender,
        });

        await user.save();

        const jwt_token = generate_jwt(name , email);
        const expireDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        
        res.cookie("token", jwt_token, {expires : expireDate, httpOnly : false});
        res.json({ success: "user registered successfully"});

    } catch (err) {
        console.log(err);
        res.json({error : "Internal server error"})
    }
};

const login_user = async (req,res) =>{

    const {email , password} = req.body;

    const user = await userModel.findOne({email : email});

    try{
        if(user){

            const verifiedPass = await bcrypt.compare(password, user.password);
    
            if(verifiedPass){
                const jwt_token = generate_jwt(user.name , email);

                const expireDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

                res.cookie("token", jwt_token, {expires : expireDate, httpOnly : false});
                res.json({success : "logged in successfully", name : user.name , email : email});

            }else{
                res.json({warning : "incorrect password."});
            }
        }else{
            res.json({warning : "user not found."});
        }
    }catch(err){
        console.log(err);
        res.json({error : "Internal server error"})
    }
}

module.exports = { register_user, login_user, validate_user };
