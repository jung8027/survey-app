const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Question = require('./question');

const Response = sequelizeConnection.define('response', {
  choice: {
    type: Sequelize.STRING
  }
});

Response.belongsTo(Question);
Question.hasMany(Response);

module.exports = Response;
