const router = require('express').Router();
const { addToCart, initIfnoCart, deleteFromCart, transformToArr } = require('../utility/cart');
const Product = require('../db/models/product')
const Sequelize = require('sequelize')

router.get('/', (req, res, next) => {
  initIfnoCart(req.session);
  let cart = req.session.cart;
  let prodList = transformToArr(cart);
  let promises = prodList.map((prodItem) => {
    return Product.findOne({
      where: {
        id: prodItem.id
      }
    });
  });

  Promise.all(promises)
  .then((prods) => {
    let transformedProds = [];
    prods.forEach((prodInfo) => {
      if (prodInfo){
        transformedProds.push({info: prodInfo, quantity: cart[prodInfo.id]});
      }
    });
    res.send(transformedProds);
  });
});

router.post('/', (req, res, next) => {
  initIfnoCart(req.session);
  addToCart(req.body, req.session.cart);
  res.send(req.session.cart);
});

router.delete('/', (req, res, next) => {
  initIfnoCart(req.session);
  deleteFromCart(req.query.id, req.session.cart);
  res.send(req.session.cart);
});


module.exports = router;
