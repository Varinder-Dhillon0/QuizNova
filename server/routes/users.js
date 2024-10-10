const express = require("express");
const router = express.Router();
const {register_user , login_user, validate_user} = require("../controllers/users");

router.post("/register",register_user);
router.post("/login",login_user);
router.post("/validateUser" , validate_user);

module.exports = router;