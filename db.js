const Sequelize = require('sequelize');
const sequelizeConnection = new Sequelize('postgres://Jung@localhost:5432/surveyapp');

//Test
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

//export
module.exports = sequelizeConnection;
