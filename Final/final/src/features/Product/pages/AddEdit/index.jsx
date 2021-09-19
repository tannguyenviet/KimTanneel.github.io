// import ProductForm from 'features/Product/components/ProductForm';
import ProductForom from '../../components/ProductForm';
import { addProduct, updateProduct } from '../../../Product/productSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { randomNumber } from 'utils/common';
import './styles.scss';
import Banner from 'components/Banner';
import ProductForm from 'features/Product/components/ProductForm';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  console.log('add Edit');
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const isAddMode = !productId;
  const editedProduct = useSelector(state => state.products).find(x => x.id === +productId);
  console.log('editProduct', editedProduct);
  const initialValues = isAddMode
    ? {
      name: '',
      price: null,
      product: '',
    }
    : editedProduct

  const handleSubmit = (values) => {
    console.log('handelSbumit', values);
    return new Promise(resolve => {
      if (isAddMode) {
        setTimeout(() => {
          const action = addProduct(values);
          dispatch(action);

          resolve(true);
        }, 1500)
      }
      else {
        const action = updateProduct(values);
        dispatch(action);
      }
      history.push('/products')
    })

  }

  return (
    <div className="product-edit">
      <Banner title="Pick your amazing product 😎" />

      <div className="product-edit__form">
        <ProductForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;