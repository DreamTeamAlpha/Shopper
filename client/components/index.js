/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as ProductWrapper} from './products'
export {default as addProductWrapper} from './addProduct'
export {default as singleProductWrapper} from './singleProduct'
export {default as cartWrapper} from './cart'
export {default as checkoutWrapper} from './checkout'
export {default as orderHistoryWrapper} from './orderHistory'
export {Login, Signup} from './auth-form'
