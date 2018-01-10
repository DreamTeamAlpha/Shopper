import React, {Component} from "react"
import {connect} from 'react-redux'
import {createProduct} from '../store'

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state ={
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(){

    }


    render() {
        return(
            <div>
            <h1> Add a Product </h1>
            <form name="addProdForm" onSubmit = {this.handleSubmit}>
                Product Name
                    <br />
                <input name="prodName" value = {this.state.name} onChange = {this.handleInputChange}/>
                    <br />
                Price
                    <br />
                <input name="price" value = {this.state.price} onChange = {this.handleInputChange}/>
                    <br />
                Description
                    <br />
                <input name="description" value = {this.state.description} onChange = {this.handleInputChange}/>
                    <br />
                Image URL
                    <br />
                <input name="image" value = {this.state.image} onChange = {this.handleInputChange}/>
                    <br />
                Category
                    <br />
                <input name="category" value = {this.state.category} onChange = {this.handleInputChange}/>
                <input type="submit" value="submit"/>
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