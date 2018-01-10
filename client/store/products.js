import axios from 'axios'

// OB/SG: consider including an ADD_PRODUCT action type

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'


/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_PRODUCTS, products})


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res =>
        dispatch(getProducts(res.data)))
      .catch(err => console.log(err)) // OB/SG: consider reporting errors to users (instead of to developers), e.g. with "toast" https://tomchentw.github.io/react-toastr/

export const createProduct = () => 
  dispatch => 
    axios.post('/api/products')
      // OB/SG: then needs to receive a callback
      .then(axios.get('/api/products')
      .then(res =>
        dispatch(getProducts(res.data)))
      .catch(err => console.log(err)))
