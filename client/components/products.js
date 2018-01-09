import React, {Component} from "react"
import {connect} from 'react-redux'

class Products extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    console.log("WORKING COMPONENT")
  }


  render() {
    return(
      <div>
        <h1>WOWWWW</h1>
      </div>
    )
  }
}

export default Products;
