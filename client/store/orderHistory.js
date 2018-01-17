import axios from 'axios';
/**
 * ACTIONS
 */
const GET_ORDERS = 'GET_ORDERS';
/**
 * ACTION CREATORS
 */
const getOrders = orderHistory => ({type: GET_ORDERS, orderHistory});
/**
 * THUNKS
 */
export const fetchOrderHistory = (userId) => {
  console.log(userId)
  return (dispatch) => {
    axios.get(`/api/users/${userId}/orders`)
         .then((res) => {
            dispatch(getOrders(res.data));
         })
         .catch(err => console.log(err));
  };
};
/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orderHistory;
    default:
      return state;
  }
}
