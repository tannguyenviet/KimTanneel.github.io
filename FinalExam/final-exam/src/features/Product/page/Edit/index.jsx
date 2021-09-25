import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import { useMutation, useQuery } from 'react-query';
import productApi from '../../../../Api/productApi';
import FormProductEdit from '../../components/ProductFormEdit/index'
EditPage.propTypes = {

};

function EditPage(props) {

    const { productId } = useParams();
    const history = useHistory();
    const { isLoading, error, data, isFetching } = useQuery('product', () => productApi.get(productId), { cacheTime: 10 })
    const mutation = useMutation('editProduct', newProduct => productApi.update(newProduct))
    const handleOnSubmitEdit = (newProduct) => {
        console.log('heelllooo', newProduct);
        mutation.mutate(newProduct);
        history.push({ pathname: '/products', state: { message: 'edit success' } });
    }
    if (isLoading) return 'Loading';
    if (error) return 'Some thing went wrong'
    return (
        <FormProductEdit handleOnSubmitEdit={handleOnSubmitEdit} product={data} ></FormProductEdit>
    );
}

export default EditPage;