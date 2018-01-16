import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/cart'
import {Link} from 'react-router-dom'

class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })

        console.log(this.state)

    }



    render() {
       
        return(
            <div>
            <h1> {this.props.user.email} </h1>
            <h1> CART </h1>
            <ul>
            {this.props.cart.map((product) => <li key = {product.info.id}>{product.info.name} : {product.quantity}</li>)}
            </ul>
            Enter your address:
            <textarea name = "address" onChange = {this.handleInputChange}/>
            <button onClick = {() => this.props.handleSubmit(this.props.user.id, this.state.address, this.props.cart)}>CHECKOUT</button>
            </div>
        )
    }  
}

const mapStateToProps = (storeState) => {
    return {
        user: storeState.user,
        cart: storeState.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSubmit(user, address, cart) {
        return dispatch(checkout(user, address, cart))
    }
})

const checkoutWrapper = connect(mapStateToProps, mapDispatchToProps)(Checkout)
export default checkoutWrapper;