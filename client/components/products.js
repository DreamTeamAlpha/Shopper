import React, {Component} from "react"
import {connect} from 'react-redux'
import {fetchProducts} from '../store'
import {Link} from 'react-router-dom'

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
          return <div  key={product.id}><Link to = {`products/${product.id}`} ><li>{product.name}</li></Link>
          
          <li>{product.price}</li>
              <br/>     
        </div>})}

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
