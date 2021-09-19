import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectedField from 'custom-fields/SelectField';
import RandomProductField from 'custom-fields/RamdomPhotoField';
import * as Yup from 'yup';
ProductForm.propTypes = {
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool,
};

ProductForm.defaultProps = {
  onSubmit: null,
  isAddMode: null,
}

function ProductForm(props) {
  const { initialValues, isAddMode } = props
  console.log('initvalue ', initialValues);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.'),
    price: Yup.number('price must be a number').required('This field is required'),
    product: Yup.string().required('This field is required.')
  });
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
              name="name"
              component={InputField}

              label="Name"
              placeholder="Name ..."
            />
            <FastField
              //fast field nhận name và component còn lại ở dưới sẽ nhận vào inputfield
              name="price"
              component={InputField}

              label="Price"
              placeholder="Eg: Price prouct ..."
            />

            <FastField
              name="product"
              component={RandomProductField}
              label="Product"
            />
            <FormGroup>
              <Button type="submit" color="primary">{isSubmitting && <Spinner size="sm" />}{isAddMode ? 'Add to album' : 'Update product'}</Button>

            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  );
}

export default ProductForm;