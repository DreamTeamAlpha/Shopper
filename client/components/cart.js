import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchProducts, fetchCart, removeFromCart} from '../store'
import { Link } from 'react-router-dom'
import { Button, Header, Grid, Image, Icon} from 'semantic-ui-react'

class Cart extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getCart()
    }

    render(){
        let {cart, handleClick} = this.props;
        return(
            <div>
              <Grid celled id="order">
                <Grid.Row className="container">
                  <Header size="huge"> CART</Header>
                </Grid.Row>
              {cart.length && cart.map((prod) => {
                return (
                  <Grid.Row key={prod.info.id}>
                    <Grid.Column width={3} height={2}>
                      <Image src={prod.info.imgUrl}/>
                    </Grid.Column>
                    <Grid.Column id="order-prod-info" width={11}>
                      <Link to = {`products/${prod.info.id}`} >{prod.info.name}</Link><span>{` x ${prod.quantity}`}</span>
                      <br/> <br/>
                      <span>${prod.info.price}</span>
                      <Icon name="trash" color="red" size="big" link={true} onClick={() => { handleClick(prod.info.id)}} id="removeFromCart"/>
                    </Grid.Column>
                  </Grid.Row>
                )
              })}
            </Grid>
              {cart.length && <Link to="/checkout"><Button color = "blue" id="checkout"> CHECKOUT </Button> </Link>}
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return{
        user : storeState.user,
        cart : storeState.cart,
        products : storeState.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCart() {
        return dispatch(fetchCart())
    },
    getProducts() {
        return dispatch(fetchProducts())
    },
    handleClick(prodId){
      dispatch(removeFromCart(prodId));
    }
})

const cartWrapper = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default cartWrapper;
