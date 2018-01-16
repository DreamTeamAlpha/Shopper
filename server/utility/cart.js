function initIfnoCart (session){
  if (!session.cart) session.cart = {};
}

function addToCart(product, cart) {
  var prodId = Object.keys(product)[0];
  if(!cart[prodId]) {
    cart[prodId] = 1
  } else {
    cart[prodId] ++
  }
}

function transformToArr(cart){
  let prod;
  return Object.keys(cart).map((key) => {
    prod = {};
    prod.id = key;
    prod.quantity = cart[key];
    return prod;
  })};

function deleteFromCart(product, cart){
  if (cart[product.id] > 1){
    cart[product.id]--;
  } else {
    delete cart[product.id];
  }
}

module.exports = {
  addToCart,
  initIfnoCart,
  deleteFromCart,
  transformToArr
};


// if (!cart[product.id]){
//   product.quantity = 1;
//   cart[product.id] = product;
// } else {
//   cart[product.id].quantity++;
// }
