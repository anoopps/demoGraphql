// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connector');

const User = sequelize.define('User', {
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'users',
});


module.exports = User;
