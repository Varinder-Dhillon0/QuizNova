const express = require("express");
const router = express.Router();
const  {create_response, get_response, update_response} = require("../controllers/response");

router.get("/response/get", get_response)
router.post("/response/create", create_response);
router.post("/response/update", update_response);

module.exports = router;