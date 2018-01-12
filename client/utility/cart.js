import axios from 'axios';

function addToCart(product) {
  axios.post('/api/cart', product)
  .catch(err => console.log(err));
}

module.exports = {
  addToCart
};
// function removeFromCart() {

// }


/*
  display cart:
   user removes product: update cart on session + update local state (by refetching cart from server or locally)
                         local state = cart
*/
