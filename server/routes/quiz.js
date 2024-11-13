const {create_quiz , get_quizzes, get_quiz, update_quiz} = require("../controllers/quiz");
const uploadImage = require("../utils/multer");

const router = require("express").Router();

router.post("/quiz/create",uploadImage.single('quizThumbnail'), create_quiz);
router.get("/quiz/get" , get_quizzes);
router.get("/quiz/getQuiz" , get_quiz);
router.post("/quiz/update", update_quiz);

module.exports = router;