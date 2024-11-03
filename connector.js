// connector.js
const { Sequelize } = require('sequelize');

// Set up Sequelize connection to MySQL
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Connected to MySQL database 10'))
  .catch((error) => console.error('Unable to connect to database:', error));

module.exports = sequelize;
