import React, {Component} from "react"
import {connect} from 'react-redux'
import {fetchProducts, addToCart, fetchCart} from '../store'
import {Link} from 'react-router-dom'
import DisplayProducts from './displayProducts';
import {Button, Input} from 'semantic-ui-react';

class Products extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visibleProducts: [],
      searchTerm: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(evt, products){
    let searchTerm = evt.target.value.toLowerCase();
    let filterResult = products.filter((prod) => {
      return prod.name.toLowerCase().includes(searchTerm);
    });
    this.setState({visibleProducts: filterResult, searchTerm});
    console.log(this.state.visibleProducts)
  }

  componentDidMount(){
    this.props.callFetchProducts();

  }

  render() {
    let { handleClick, products } = this.props;
    let { visibleProducts, searchTerm } = this.state;
    return (
      <div>
       <Input className="wrap" icon='search' placeholder='Search...'
        onChange={(evt) => { this.handleSearchChange(evt, products); }}
       />

        {(searchTerm.length &&
        <DisplayProducts products={visibleProducts} handleClick={handleClick} />)
        ||
        (products.length &&
        <DisplayProducts products={products} handleClick={handleClick} />)}
      </div>
    )
  }
}

const mapStateToProps= (storeState) => {
  return {
    products: storeState.products
  };
}

const mapDispatchToProps = (dispatch) => ({
  callFetchProducts() {
    return dispatch(fetchProducts())
  },
  handleClick(product) {
    return dispatch(addToCart(product))
  },
  getCart() {
    return dispatch(fetchCart())
  }
});

const productWrapper = connect(mapStateToProps, mapDispatchToProps)(Products)
export default productWrapper;
