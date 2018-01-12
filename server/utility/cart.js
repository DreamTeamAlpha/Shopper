function initIfnoCart (session){
  if (!session.cart) session.cart = {};
}

function addToCart(product, cart) {
  if (!cart[product.id]){
    product.quantity = 1;
    cart[product.id] = product;
  } else {
    cart[product.id].quantity++;
  }
}

function deleteFromCart(product, cart){
  delete cart[product.id];
}

module.exports = {
  addToCart,
  initIfnoCart,
  deleteFromCart
};
