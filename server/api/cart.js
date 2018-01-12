const router = require('express').Router();
const { addToCart } = require('../utility/cart');

router.post('/', (req, res, next) => {
  if (!req.session.cart) req.session.cart = {};
  addToCart(req.body, req.session.cart);
  res.send(req.session.cart);
});

export default router;
