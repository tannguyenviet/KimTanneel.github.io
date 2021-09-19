import OrderList from 'features/Order/components/OrderList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { getApiOrderList, reloadOrderList, removeOrder } from 'features/Order/orderSlice'
import orderApi from 'Api/orderApi';
import { reloadProductList } from 'features/Product/productSlice';
MainPage.propTypes = {};

function MainPage(props) {


  const dispatch = useDispatch();
  const history = useHistory();
  const orders = useSelector(state => state.orders.current);
  console.log('current ORders', orders);

  const handleOrderEditClick = (order) => {
    console.log('edit', { order });
    const editOrderUrl = `/orders/${order._id}`

    history.push(editOrderUrl);
    // console.log('Edit: ', order);
  }
  const handleOrderRemoveClick = async (order) => {
    console.log('remove', order);

  }

  useEffect(() => {
    console.log('vao usseefefct Main page');
    const fetchOrderList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        dispatch(getApiOrderList(params));

      }
      catch (err) {
        console.log('Fail to fetch order list');
      }
    }
    fetchOrderList();
  }, [])
  return (
    <div className="order-main">
      <Banner title="Your awesome orders 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/orders/add">Add new order</Link>
        <OrderList orderList={orders} onOrderEditClick={(handleOrderEditClick)} onOrderRemoveClick={handleOrderRemoveClick}></OrderList>
      </Container>
    </div>
  );
}

export default MainPage;