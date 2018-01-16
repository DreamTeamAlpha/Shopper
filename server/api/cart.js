const router = require('express').Router();
const { Product } = require('../db/models');
const { addToCart, initIfnoCart, deleteFromCart, transformToArr } = require('../utility/cart');

router.get('/', (req, res, next) => {
  initIfnoCart(req.session);


});

router.post('/', (req, res, next) => {
  initIfnoCart(req.session);
  addToCart(req.body, req.session.cart);
  res.send(req.session.cart);
});

router.delete('/', (req, res, next) => {
  initIfnoCart(req.session);
  deleteFromCart(req.body, req.session.cart);
  res.send(req.session.cart);
});


module.exports = router;
