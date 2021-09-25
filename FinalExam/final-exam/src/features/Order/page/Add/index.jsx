import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'react-query';
import orderApi from '../../../../Api/orderApi';
import { useParams } from 'react-router';
import OrderForm from '../../../Order/components/OrderForm/index';
import productApi from '../../../../Api/productApi';
AddPage.propTypes = {

};
function AddPage(props) {
    const { isLoading, error, data, isFetching } = useQuery('products', productApi.getAll)

    const mutation = useMutation('createOrder', newOrder => orderApi.create(newOrder));
    const handleSubmitForm = (order) => {
        mutation.mutate(order);
    }
    if (isLoading) return "Loading...."
    if (error) return "An Error orcurs"
    return (
        <div className='form-handle'>
            <OrderForm productListOption={data} handleSubmitForm={handleSubmitForm} />

            {mutation.isLoading ? (
                'Adding todo...'
            ) : (
                <>
                    {mutation.isError ? (
                        <div>An error occurred: {mutation.error.message}</div>
                    ) : null}

                    {mutation.isSuccess ? <p className='message-success'> Order Add Success!  </p> : null}
                </>
            )}
        </div>
    );
}

export default AddPage;