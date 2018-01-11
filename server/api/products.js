const router = require('express').Router()
const Product = require('../db/models/product');
const Sequelize = require('sequelize');

router.get('/', (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.json(products);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    Product.findOne({
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
    Product.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(() => res.sendStatus(202))
    .catch(next);
})

module.exports = router


