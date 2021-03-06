const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
});

module.exports = Order;
