function initIfnoCart (session){
  if (!session.cart) session.cart = {};
}

function addToCart(prodId, cart) {
  let id = Object.keys(prodId)[0];
  if (!cart[id]){
    cart[id] = 1;
  } else {
    cart[id]++;
  }
}

function deleteFromCart(prodId, cart){
  delete cart[prodId];
}

module.exports = {
  addToCart,
  initIfnoCart,
  deleteFromCart
};
