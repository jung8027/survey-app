const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
//const Response = require('./response');

const Question = sequelizeConnection.define('question', {
  question: {
    type: Sequelize.STRING
  },
  choiceOne: {
    type: Sequelize.STRING
  },
  choiceTwo: {
    type: Sequelize.STRING
  },
  choiceThree: {
    type: Sequelize.STRING
  },
  choiceFour: {
    type: Sequelize.STRING
  }
});



module.exports = Question;
