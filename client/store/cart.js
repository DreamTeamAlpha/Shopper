import axios from 'axios'

/*
ACTION TYPES
*/

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'



/*
ACTION CREATORS
*/

const getCart = cart => ({
    type: GET_CART,
    cart
})

const addItemToCart = cart => ({
    type: ADD_TO_CART,
    cart
})



/*
REDUCER
*/

export default function (state = [], action) {
    switch(action.type) {
        case GET_CART:
            return action.cart
        case ADD_TO_CART: 
            return action.cart
        default:
            return state
    }
}

/*
THUNKTOWN
*/

export const fetchCart = () =>
    dispatch =>
        axios.get('/api/cart')
         .then((res) => dispatch(getCart(res.data)))
        .catch(err => console.log(err))


export const addToCart = (item) =>
    dispatch =>
        axios.post('/api/cart', item)
    .catch(err => console.log(err))

export const checkout = (user, address, cart) => {
    var checkoutObject = {userId: user,
                          address: address,
                          cart: cart}
    dispatch =>
        axios.post('/api/orders', checkoutObject)
        .catch(err => console.log(err))
}