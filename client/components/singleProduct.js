import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/singleProduct'
import { addToCart, fetchCart } from '../store/cart'


class SingleProduct extends Component {
    constructor(props){
        super(props)
    }

componentDidMount(){
    this.props.loadSingleProduct();
    this.props.getCart();
}

    render(){

        return(
            <div>
            <h1> {this.props.product.name} </h1>
            <h3> {this.props.product.price} </h3>
            <h5> {this.props.product.description} </h5>
            <img src = {this.props.product.image}/>
            <button onClick ={() => this.props.handleClick(this.props.product.id)}>ADD TO CART </button>
            </div>
        )
    }
}



function mapStateToProps(storeState) {
    return {
        product: storeState.singleProduct
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadSingleProduct: function() {
            dispatch(fetchSingleProduct(ownProps.match.params.id))
            },
        handleClick: function(product) {
            dispatch(addToCart(product))
            },
        getCart: function() {
            dispatch(fetchCart());
        }
        }
    }


const singleProductWrapper = connect(mapStateToProps, mapDispatchToProps)(SingleProduct)

export default singleProductWrapper