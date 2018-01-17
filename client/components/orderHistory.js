import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrderHistory } from '../store';
import DisplayOrder from './displayOrder';
import { calcTotal } from '../utility/order';

class OrderHistory extends Component{
  constructor (props){
    super(props);
  }
  componentDidMount(){
    this.props.callFetchOrderHistory(this.props.userId);
  }

  render(){
    let orderHistory = this.props.orderHistory;
    return (
      orderHistory.length &&
        orderHistory.map((order) => {
          return <DisplayOrder order={order} key={order.id} />;
        })
    );
  }
}

const mapStateToProps = (storeState) => {
  let orderHistory = storeState.orderHistory.map((order) =>{
    order.total = calcTotal(order.products);
    return order;
  })
  return {
    userId: storeState.user.id,
    orderHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callFetchOrderHistory(userId) {
      return dispatch(fetchOrderHistory(userId));
    }
  };
};

const orderHistoryWrapper = connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

export default orderHistoryWrapper;
