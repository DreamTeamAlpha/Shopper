import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/cart'
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

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
            <input name = "address" onChange = {this.handleInputChange}/>
            <Button color = "blue" onClick = {() => this.props.handleSubmit(this.props.user.id, this.state.address, this.props.cart)}>CHECKOUT</Button>
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

const mapDispatchToProps = (dispatch, ownprops) => ({
    handleSubmit(user, address, cart) {
        return checkout(user, address, cart, ownprops.history);
    }
})

const checkoutWrapper = connect(mapStateToProps, mapDispatchToProps)(Checkout)
export default checkoutWrapper;
