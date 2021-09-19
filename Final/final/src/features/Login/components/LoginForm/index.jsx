import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Container } from 'reactstrap';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import * as Yup from 'yup';
LoginForm.propTypes = {

};

function LoginForm(props) {
    const initialValues = {
        username: '',
        password: ''
    }
    console.log('initvalue ', initialValues);
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is require'),
        password: Yup.string().required('This field is required'),
    });

    const handleSubmitLogin = (account) => {
        console.log(account);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitLogin}
        >
            {formikProps => {
                // do st here ...
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });
                return (
                    <Container>
                        <Form className='form-login'>
                            <FastField
                                //fast field nhận name và component còn lại ở dưới sẽ nhận vào inputfield
                                name="username"
                                component={InputField}

                                label="Username"
                                placeholder="Your usename or email"
                            />
                            <FastField
                                //fast field nhận name và component còn lại ở dưới sẽ nhận vào inputfield
                                name="password"
                                component={InputField}

                                label="Password"
                                placeholder="Your Password"
                            />
                            <FormGroup>
                                <Button type="submit" color="primary">Log In </Button>

                            </FormGroup>
                        </Form>
                    </Container>

                )
            }}
        </Formik>
    );
}

export default LoginForm;