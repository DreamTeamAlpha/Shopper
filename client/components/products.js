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

  // OB/JS: sacrifice something to your angry linter
  render() {
    return(
      <div>
       <ul>
        {this.props.products.map((product) => {
          return <li key={product.id}>{product.name} 
          <br/> 
          {product.price}</li>
                 
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
  }
})

const productWrapper = connect(mapStateToProps, mapDispatchToProps)(Products)
export default productWrapper;
