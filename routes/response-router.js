const Response = require('../models/response');
const Question = require('../models/question');
const express = require('express');
const router = express.Router();

//FUNCTIONS//
const getAllResponses = (req,res)=>
  Response.findAll({include: [Question]})
  .then((responses)=>
  	res.send(responses)
  )

const submitResponse = (req,res)=>{
	let body = req.body;
  Response.create({
  	choice: body.choice,
  	questionId: body.id
  })
}

//ROUTES//
router.route('/')
  .get(getAllResponses)
  .post(submitResponse)
module.exports = router