import ProductList from 'features/Product/components/ProductList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { removeProduct } from 'features/Product/productSlice'
import orderApi from 'Api/orderApi';
MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(state => state.products);

  const handleProductEditClick = (product) => {
    const editProductUrl = `/products/${product.id}`
    // 
    history.push(editProductUrl);
    console.log('Edit: ', product);
  }
  const handleProductRemoveClick = (product) => {
    console.log({ product });
    const action = removeProduct(product);
    dispatch(action);
    // gọi api post delete 
  }

  useEffect(() => {
    console.log('vao usseefefct Main page');
    const fetchOrderList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await orderApi.getAll(params);
        console.log('data', response);
      }
      catch (err) {
        console.log('Fail to fetch order list');
      }
    }
    fetchOrderList();
  })
  return (
    <div className="product-main">
      <Banner title="Your awesome products 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/products/add">Add new product</Link>
        <ProductList productList={products} onProductEditClick={handleProductEditClick} onProductRemoveClick={handleProductRemoveClick}></ProductList>
      </Container>
    </div>
  );
}

export default MainPage;