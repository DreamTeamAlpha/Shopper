const router = require('express').Router();
const {User, Order, Product } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'name', 'email']
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'email']
  })
  .then(user => {
    res.json(user);
  })
  .catch(next);
});

router.get('/:id/orders', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.id,
    },
    include: [{all: true}]
  })
  .then((orders) => {
    res.json(orders);
  });
});

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  });
});
