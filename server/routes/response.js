const express = require("express");
const router = express.Router();
const  {create_response, get_response, update_response, generate_result, get_results, get_result} = require("../controllers/response");

router.get("/response/get", get_response)
router.post("/response/create", create_response);
router.post("/response/update", update_response);
router.post("/response/results", get_results);
router.post("/response/singleresult", get_result);
router.post("/response/generateresult", generate_result);

module.exports = router;