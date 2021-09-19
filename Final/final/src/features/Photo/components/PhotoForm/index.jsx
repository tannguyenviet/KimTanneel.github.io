import React from 'react';
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
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  isAddMode: null,
}

function PhotoForm(props) {
  const { initialValues, isAddMode } = props
  console.log('initvalue ', initialValues);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),
    category: Yup.number().required('This field is required').nullable(),
    photo: Yup.string().required('This field is required.')
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
              name="title"
              component={InputField}

              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="category"
              component={SelectedField}

              label="Category"
              placeholder="Eg: Wow nature ..."
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            <FormGroup>
              <Button type="submit" color="primary">{isSubmitting && <Spinner size="sm" />}{isAddMode ? 'Add to album' : 'Update photo'}</Button>

            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  );
}

export default PhotoForm;