const router = require('express').Router()
const product = require('../db/models/product');
const Sequelize = require('sequelize');

router.get('/', (req, res, next) => {
    product.findAll()
    .then(products => {
        res.json(products);
    })
    .catch(next);
});

// OB/SG: keep indentation consistent
router.get('/:id', (req, res, next) => {
    // OB/SG: lowercase p product is against the idiom, whic uppercase for classes / models
    product.findOne({
        where: {
          id: req.params.id
        }
    })
    .then(product => {
        res.json(product);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    product.create(req.body)
    // OB/SG: then should take a callback
    .then(res.sendStatus(201))
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    // OB/SG: then should take a callback
    .then(res.sendStatus(202)) // OB/SG: probably should be 204 status
    .catch(next);
})

module.exports = router


