import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Item, Card, Image} from 'semantic-ui-react';

const DisplayProducts = function(props){

  return (
    <div className="products">
      {props.products.map((prod) => {
        return(
         <Card>
          <Image src={prod.imgUrl} />
          <Card.Content>
            <Card.Header>{prod.name}</Card.Header>
            <Card.Meta>{'$' + prod.price}</Card.Meta>
            <Card.Description>{prod.description}</Card.Description>
          </Card.Content>
          <li> <Button color = "blue" onClick ={() => props.handleClick(prod.id)}> ADD TO CART</Button> </li>
        </Card>
        );
      })}
    </div>
  );
};

export default DisplayProducts;


// {/* <div>
// <ul>
// {props.products.map((product) => {
//   return <div  key={product.id}><Link to = {`products/${product.id}`} ><li>{product.name}</li></Link>

//   <li>{product.price}</li>
//   <li><img src = {product.imgUrl}/></li>
//   <li> <Button color = "blue" onClick ={() => props.handleClick(product.id)}> ADD TO CART</Button> </li>
//       <br/>
// </div>})}

// </ul>
// </div> */}
