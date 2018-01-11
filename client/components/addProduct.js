import React, {Component} from "react"
import {connect} from 'react-redux'
import {createProduct, fetchProducts} from '../store'

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state ={
            
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        
}
        
componentDidMount(){
    this.props.callFetchProducts()
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
            <h1> Add a Product </h1>
            <form name="addProdForm" onSubmit = {() => this.props.handleSubmit(this.state)}>
                Product Name
                    <br />
                <input name="name"onChange = {this.handleInputChange}/>
                    <br />
                Price
                    <br />
                <input name="price" onChange = {this.handleInputChange}/>
                    <br />
                Description
                    <br />
                <input name="description" onChange = {this.handleInputChange}/>
                    <br />
                Image URL
                    <br />
                <input name="image" onChange = {this.handleInputChange}/>
                    <br />
                Category
                    <br />
                <input name="category" onChange = {this.handleInputChange}/>
                <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}

//This is here in case we need it. MUST DELETE IF NOT USED BEFORE RELEASE
// const mapStateToProps = (storeState) => {

// }

function mapDispatchToProps(dispatch){
    return {
        handleSubmit: function(state) {
            dispatch(createProduct(state))
    },
        callFetchProducts: function() {
            dispatch(fetchProducts())
        }
    }
}

const addProductWrapper =  connect(null, mapDispatchToProps)(AddProduct)

export default addProductWrapper