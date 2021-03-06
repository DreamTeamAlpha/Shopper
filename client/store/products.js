import axios from 'axios'

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
      .catch(err => console.log(err))

export const createProduct = (props) => 
  dispatch => 
    axios.post('/api/products', props)
      .catch(err => console.log(err))
