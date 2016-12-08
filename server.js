var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize') 
var sequelizeConnection = require('./db');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

//ROUTES//
const router = require('./routes');
const questionRoute = router.questionRoute; 
const responseRoute = router.responseRoute;

//ROUTER URL PATHS//
app.use('/api/question', questionRoute);
app.use('/api/response', responseRoute);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

sequelizeConnection.sync().then(function() {
  app.listen(3000, () => console.log('Listening on port 3000'))
})

