import React from 'react';
import PropTypes from 'prop-types';
// import './OrderList.scss'
import orderApi from '../../../../Api/orderApi';
import { useQuery } from 'react-query'
import { ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';
OrderList.propTypes = {
    orderList: PropTypes.array,
    handleRemoveClick: PropTypes.func,
};
OrderList.defaultValue = {
    orderList: [],
    handleRemoveClick: null
}


function OrderList(props) {

    const { orderList, handleRemoveClick } = props;
    const onClickDelete = (order) => {
        if (!handleRemoveClick) return;
        handleRemoveClick(order);
    }
    
    return (
        <div className='order-list m-5'>
            <Link className='btn btn-primary mb-3' to='/orders/add'>Add new Order</Link>
            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name Customer</th>
                        <th>Phone</th>
                        <th>Product Quantity</th>
                        <th>TotalCost</th>
                        <th>Employee</th>
                        <th>Status</th>
                        <th>Detail</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {orderList.map((order, index) => (
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.name_customer}</td>
                            <td>{order.phone}</td>
                            <td>{order.products.length}</td>
                            <td>{order.total_cost}</td>
                            <td>{order.user_id}</td>
                            <td>{order.status ? 'Pending' : 'Complete'}</td>
                            <td>
                                <Link to={`/orders/${order._id}`} className='btn btn-info'>Detail</Link>
                            </td>
                            <td>
                                <Link to={`/orders/${order._id}`} className='btn btn-primary'>Edit</Link>
                            </td>
                            <td>
                                <button onClick={() => onClickDelete(order)} className='btn btn-danger'>Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;