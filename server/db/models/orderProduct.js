const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = db.define('orderProduct', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get(){
      return this.getDataValue('price') / 100;
    },
    set(value){
      this.setDataValue('price', value * 100);
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = OrderProduct;

