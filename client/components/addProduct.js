import React, {Component} from "react"
import {connect} from 'react-redux'
import {createProduct} from '../store'

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state ={
            name: "",
            price: 0,
            description: "",
            image: "",
            category: ""
        }
    }


    render() {
        return(
            <div>
            <h1> Add a Product </h1>
            <form>
                Product Name
                <br />
                <input id="prodName"></input>
                <br />
                Price
                <br />
                <input id="price"></input>
                <br />
                Description
                <br />
                <input id="description"></input>
                <br />
                Image URL
                <br />
                <input id="image"></input>
                <br />
                Category
                <br />
                <input id="category"></input>
            </form>
            </div>
        )
    }
}

// const mapStateToProps = (storeState) => {

// }

const mapDispatchToProps = (dispatch) => ({
    handleSubmit() {
        return dispatch(createProduct())
    }
})

const addProductWrapper =  connect(null, mapDispatchToProps)(AddProduct)

export default addProductWrapper