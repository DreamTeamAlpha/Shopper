function addToCart(product, cart) {
  if (!cart[product.id]){
    product.quantity = 1;
    cart[product.id] = product;
  } else {
    cart[product.id].quantity++;
  }
}

module.exports = {
  addToCart
};
