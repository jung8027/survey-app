const Question = require('../models/question');
const express = require('express');
const router = express.Router();

//FUNCTIONS//
const getAllQuestions = (req,res)=>
  Question.findAll()
  .then((questions)=>
  	res.send(questions)
  )

const createQuestion = (req,res)=>{
	let body = req.body;
	Question.create({
	  question: body.question,
	  choiceOne: body.one,
	  choiceTwo: body.two,
	  choiceThree: body.three,
	  choiceFour: body.four	  
  })
  .then(questionInfo=>res.send(questionInfo))
}

//ROUTES//
router.route('/')
  .get(getAllQuestions)
  .post(createQuestion)

module.exports = router