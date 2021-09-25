import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import { useMutation, useQuery } from 'react-query';
import orderApi from '../../../../Api/orderApi';
import FormOrderEdit from '../../components/OrderFormEdit/index'
import productApi from '../../../../Api/productApi';
EditPage.propTypes = {

};

function EditPage(props) {

    const { orderId } = useParams();
    const history = useHistory();
    const { isLoading, error, data, isFetching } = useQuery('order', () => orderApi.get(orderId), { cacheTime: 10 });
    const mutation = useMutation('editOrder', newOrder => orderApi.update(newOrder));

    const QueryMultiple = () => {
        const res1 = useQuery('order', () => orderApi.get(orderId), { cacheTime: 10 });
        const res2 = useQuery('products', () => productApi.getAll());
        return [res1, res2];
    }
    const [
        { error: error1, isLoading: loading1, data: data1 },
        { error: error2, isLoading: loading2, data: data2 }
    ] = QueryMultiple()
    console.log({ data1 });
    const handleOnSubmitEdit = (newOrder) => {
        console.log('heelllooo', newOrder);
        // mutation.mutate(newOrder);
        // history.push({ pathname: '/orders', state: { message: 'edit success' } });
    }
    if (loading1 || loading2) return 'Loading';
    if (error1, error2) return 'Some thing went wrong'
    return (
        <FormOrderEdit handleOnSubmitEdit={handleOnSubmitEdit} order={data1} productListOption={data2}></FormOrderEdit>
    );
}

export default EditPage;