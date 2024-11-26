const express = require("express");
const router = express.Router();
const  {create_response, get_response, update_response, get_result, get_results} = require("../controllers/response");

router.get("/response/get", get_response)
router.post("/response/create", create_response);
router.post("/response/update", update_response);
router.post("/response/result", get_result);
router.post("/response/results", get_results);

module.exports = router;