import express from "express"
import { addQuestion, addAnswer, getAnswersByQuestionId, updateAnswer } from "../controller/questionController.js"

const router = express.Router()

//POST request to add a question
router.post("/question", addQuestion)


//POST request to answer a question
router.post("/question/:questionId/answer", addAnswer )


//GET request to get all the answers of a question 
router.get("/question/:questionId", getAnswersByQuestionId)

router.put("/question/:questionId/answer", updateAnswer )

export default router
