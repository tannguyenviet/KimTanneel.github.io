import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router';
import FormLogin from './components/FormLogin/index'
import userApi from '../../Api/userApi';
import { useMutation } from 'react-query';
User.propTypes = {
};

function User(props) {
    const { mutate, isLoading, error, isError, data, isSuccess } = useMutation('login', data => userApi.login(data))
    const history = useHistory();
    const match = useRouteMatch();
    const handleSubmitForm = (formData) => {
        mutate(formData);
    }
    const handleIsLogin = () => {

    }

    if (isSuccess) {
        console.log({ data });
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        history.push('/orders');
    }
    if (isError) {
        // console.log('response Erorr', { error })
        return (
            <FormLogin errorMessage={error.response.data} handleSubmitForm={handleSubmitForm} />
        )
    }


    return (
        <div>
            < h1 > Login Form</h1 >

            <FormLogin handleSubmitForm={handleSubmitForm} />
        </div>
    );
}

export default User;