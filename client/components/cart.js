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

    render(){

        return(
            <div>
                <ul>
                    <h1> CART </h1>
                   {this.props.cart && this.props.cart.map((product) => <li key = {product.info.id}>{product.info.name} : {product.quantity}</li>)}
                </ul>

      
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