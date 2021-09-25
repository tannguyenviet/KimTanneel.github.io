import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import productApi from '../../../../Api/productApi';
import { useParams } from 'react-router';
import ProductForm from '../../../Product/components/ProductForm/index';
import './AddPage.scss';
AddPage.propTypes = {

};
function AddPage(props) {
    const mutation = useMutation('createProduct', newProduct => productApi.create(newProduct));
    const handleSubmitForm = (product) => {
        mutation.mutate(product);
    }

    return (
        <div className='form-handle'>
            <ProductForm handleSubmitForm={handleSubmitForm} />

            {mutation.isLoading ? (
                'Adding todo...'
            ) : (
                <>
                    {mutation.isError ? (
                        <div>An error occurred: {mutation.error.message}</div>
                    ) : null}

                    {mutation.isSuccess ? <p className='message-success'> Product Add Success!  </p> : null}
                </>
            )}
        </div>
    );
}

export default AddPage;