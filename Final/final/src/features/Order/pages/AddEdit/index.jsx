// import OrderForm from 'features/Order/components/OrderForm';
import OrderForom from '../../components/OrderForm';
import { addOrder, getApiOrderList, updateOrder } from '../../../../features/Order/orderSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { randomNumber } from 'utils/common';
import './styles.scss';
import Banner from 'components/Banner';
import OrderForm from 'features/Order/components/OrderForm';
import orderApi from 'Api/orderApi';
import { getMe } from 'features/Product/productSlice';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orderId } = useParams();
  const isAddMode = !orderId;



  const editedOrder = useSelector(state => state.orders.current).find(x => x._id === orderId);
  console.log('editOrder', editedOrder);
  const initialValues = isAddMode
    ? {
      name_customer: '',
      phone: '',
      email: '',
      product: [],
      totalcost: 0,
      user_id: null,

    }
    : editedOrder

  const handleSubmit = (values) => {
    console.log('handleSubmit', values);
    /// goi API 
    // resolve json -> dispatch reload
    // chuyen ve page orders
    orderApi.post(values).then(data => {
      if (isAddMode) {
        console.log('resolove', data);
        // dispatch(getApiOrderList())
      }
      else {
        const action = updateOrder(values);
        dispatch(action);
      }
      history.push('/orders')
    }).catch(error => console.log('eroor', error))
  }

  return (
    <div className="order-edit">
      <Banner title="Pick your amazing order 😎" />

      <div className="order-edit__form">
        <OrderForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;