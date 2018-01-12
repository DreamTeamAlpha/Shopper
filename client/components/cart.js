import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchProducts, addToCart} from '../store'
import { Link } from 'react-router-dom'

class Cart extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCart()
    }

    render(){
        return(
            <div>
                {/*<ul>
                    {this.props.cart.map((product) => {

                        return <li>{product.name}</li>

                    })}
                </ul>*/}

                LOOK AT THIS BEAUTIFUL CART
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return{
        cart : storeState.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCart() {
        return dispatch(fetchCart())
    }
})

const cartWrapper = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default cartWrapper;