import axios from 'axios'

/*
ACTION TYPES
*/

const GET_CART = 'GET_CART'



/*
ACTION CREATORS
*/

const getCart = cart => ({
    type: GET_CART,
    cart
})



/*
REDUCER
*/

export default function (state = {}, action) {
    switch(action.type) {
        case GET_CART:
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
            .then(res =>
                dispatch(getCart(res.data)))
            .catch(err => console.log(err))


export const addToCart = (item) =>
    dispatch =>
        axios.post('/api/cart', item)
            // .then(() => axios.get('/api/cart'))
        .catch(err => console.log(err))