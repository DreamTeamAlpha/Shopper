import React, {Component} from "react"
import {connect} from 'react-redux'
import {fetchProducts} from '../store'

class Products extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    this.props.callFetchProducts()
  }

  render() {
    return(
      <div>
       <ul>
        {this.props.products.map((product) => {
          return <li key={product.id}>{product.name}{product.price}
          <button name='addBtn' value={product.id} onClick={this.props.handleClick}>ADD TO CART</button>
          </li>
        })}
       </ul>
      </div>
    )
  }
}

const mapStateToProps= (storeState) => {
  return {
    products: storeState.products
  }
}

const mapDispatchToProps = (dispatch) => ({
  callFetchProducts() {
    return dispatch(fetchProducts())
  },
  handleClick(evt) {
    return addToCart(evt.target.value)
  }
})

const productWrapper = connect(mapStateToProps, mapDispatchToProps)(Products)
export default productWrapper;
