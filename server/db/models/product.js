const Sequelize = require('sequelize');
const db = require('../db');


// OB/SG: address linter issues
// OB/SG: consider validations (not urgent)
const product = db.define('product', {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },

    price : {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    image: {
        type: Sequelize.STRING,
        validate : {
            isURL: true
        }
    },

    description : {
        type: Sequelize.TEXT,
        allowNull: false
    },

    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = product;