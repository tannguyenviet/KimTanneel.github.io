import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table, ButtonToggle } from 'reactstrap';
import OrderCard from '../OrderCard';

OrderList.propTypes = {
  orderList: PropTypes.array,
  onOrderEditClick: PropTypes.func,
  onOrderRemoveClick: PropTypes.func,
};

OrderList.defaultProps = {
  orderList: [],
  onOrderEditClick: null,
  onOrderRemoveClick: null,
};

function OrderList(props) {
  const { orderList, onOrderEditClick, onOrderRemoveClick } = props;
  return (
    <Row>
      <Table hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name Customer</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Total Cost</th>
            <th>Employee</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{order.name_customer}</td>
              <td>{order.phone}</td>
              <td>{order.email}</td>
              <td>{order.total_cost}</td>
              <td>{order.user_id}</td>
              <td><ButtonToggle onClick={() => onOrderEditClick(order)} color="primary">Edit</ButtonToggle>{' '}</td>
              <td><ButtonToggle onClick={onOrderRemoveClick} color="danger">Delete</ButtonToggle>{' '}</td>
            </tr>
          ))}

        </tbody>
      </Table>
      {orderList.map(order => (

        <Col key={order.id} xs="12" md="6" lg="3">
          <OrderCard
            order={order}
            onEditClick={onOrderEditClick}
            onRemoveClick={onOrderRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default OrderList;