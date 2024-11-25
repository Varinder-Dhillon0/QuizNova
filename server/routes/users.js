const express = require("express");
const router = express.Router();
const {register_user , login_user, validate_user, verify_user} = require("../controllers/users");

router.post("/register",register_user);
router.post("/login",login_user);
router.post("/validateUser" , validate_user);
router.get("/user/verify/:userId/:uniqueString" , verify_user);

module.exports = router;