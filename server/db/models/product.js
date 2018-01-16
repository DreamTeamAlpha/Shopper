const Sequelize = require('sequelize');
const db = require('../db');


const product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    imgUrl: {
        type: Sequelize.STRING,
        validate: {
            isURL: true
        }
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true
    },

    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = product;
