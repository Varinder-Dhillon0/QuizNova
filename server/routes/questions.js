const { create_question } = require("../controllers/questions");

const router = require("express").Router();

router.post("/question/create" , create_question);

module.exports = router