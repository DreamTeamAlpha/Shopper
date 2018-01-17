const router = require('express').Router();
const { Order, OrderProduct } = require('../db/models');

router.post('/', (req, res, next) => {
  //create order specifying userID
  let { userId, address, cart } = req.body;
  let order = { userId, address };
  let prodList = [];

  Order.create(order)
  .then((createdOrder) => {
    prodList = cart.map((prod) => {
      let { price, id } = prod.info;
      let quantity = prod.quantity;
      return { price, quantity, orderId: createdOrder.id, productId: id};
    });

    OrderProduct.bulkCreate(prodList);
    req.session.cart = {};
    res.sendStatus(201);
  })
  .catch(next);
});


module.exports = router;
