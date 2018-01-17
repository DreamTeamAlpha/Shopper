import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const DisplayOrder = function(props){
  let { address, createdAt, products, id, total } = props.order;
  createdAt = createdAt.substring(0, 10);
  return (
    <Grid celled id="order">
      <Grid.Row className="container">
        <div className="orderItem">
          <Header sub>ORDER PLACED</Header>
          <span>{createdAt}</span>
        </div>
        <div className="orderItem">
          <Header sub>TOTAL</Header>
          <span>${total}</span>
        </div>
        <div className="orderItem">
          <Header sub>SHIP TO</Header>
          <span>{address}</span>
        </div>
      </Grid.Row>
      {products.map((prod) => {
        return (
          <Grid.Row key={prod.id}>
            <Grid.Column width={3}>
              <Image src={prod.imgUrl}/>
            </Grid.Column>
            <Grid.Column id="order-prod-info" width={11}>
              <Link to = {`products/${prod.id}`} >{prod.name}</Link><span>{` x ${prod.orderProduct.quantity}`}</span>
              <br/> <br/>
              <span>${prod.orderProduct.price}</span>
            </Grid.Column>
          </Grid.Row>
        )
      })}
    </Grid>

  )
}

export default DisplayOrder;
