import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectedField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RamdomPhotoField';
import * as Yup from 'yup';
import { useEffect } from 'react';
import productApi from 'Api/productApi';
import { getApiProductList } from 'features/Product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
OrderForm.propTypes = {
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool,
};

OrderForm.defaultProps = {
  onSubmit: null,
  isAddMode: null,
}

function OrderForm(props) {
  const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const { initialValues, isAddMode } = props
  console.log('initvalue ', initialValues);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    nameCustomer: Yup.string().required('This field is required.'),
    phone: Yup.string().matches(PHONE_REGEX, 'Phone number is not valid').required('This field is required.'),
    email: Yup.string().email('Email is not valid').required('This field is required.'),
    userId: Yup.number().required('This field is required'),
  });
  const [productList, setProductList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  
  useEffect(async () => {
    async function fetchProductList() {
      const productList = await productApi.getAll();

      const productListMapping = await productList.map((product) => ({ value: product._id, label: product.name }))

      setProductList(productListMapping)

      console.log('productList', productListMapping);
    }
    fetchProductList();
  }, [])
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {formikProps => {
        // do st here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              //fast field nhận name và component còn lại ở dưới sẽ nhận vào inputfield
              name="name_customer"
              component={InputField}

              label="Name Customer"
              placeholder="Name Customer"
            />

            <FastField
              name="phone"
              component={InputField}

              label="Phone "
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="email"
              component={InputField}

              label="Mail "
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="user_id"
              component={SelectedField}

              label="Employee"
              placeholder="Eg: Wow nature ..."

            />
            <div className='listProductFromOrder'>
              <h3>ListProduct</h3>
              <FastField
                name="productList"
                component={SelectedField}

                label="Product List "
                placeholder="Eg: Wow nature ..."
                options={productList}
              />
            </div>
            <FormGroup className='mt-3'>
              <Button type="submit" color="primary">{isSubmitting && <Spinner size="sm" />}{isAddMode ? 'Add to orders' : 'Update order'}</Button>

            </FormGroup>

          </Form>
        )
      }}
    </Formik>
  );
}

export default OrderForm;