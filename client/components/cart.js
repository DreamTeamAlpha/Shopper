import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchProducts, addToCart, fetchCart} from '../store'
import { Link } from 'react-router-dom'

class Cart extends Component {
    constructor(props){
        super(props)

      
    }

    componentWillMount(){
        this.props.getCart()
    }
    // componentDidMount(){
    //     // this.props.getProducts()
    // }
    
   
    render(){
      console.log(this.props.cart)
        return(
            <div>
                <ul>
                    <li> Hi </li>
                   {this.props.cart && this.props.cart.map((product) => <li key = {product.info.id}>{product.info.name} : {product.quantity}</li>)}
                </ul>

                LOOK AT THIS BEAUTIFUL CART
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return{
        cart : storeState.cart,
        products : storeState.products
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCart() {
        return dispatch(fetchCart())
    },
    getProducts() {
        return dispatch(fetchProducts())
    }
})

const cartWrapper = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default cartWrapper;