import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'


/**
 * ACTION CREATORS
 */
const getSingleProduct = product => ({type: GET_SINGLE_PRODUCT, product})


/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const fetchSingleProduct = (props) =>
  dispatch =>
    axios.get('/api/products/' + props)
      .then(res =>
        dispatch(getSingleProduct(res.data)))
      .catch(err => console.log(err))

