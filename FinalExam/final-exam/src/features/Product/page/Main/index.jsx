import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../components/ProductList';
import { useMutation, useQuery } from 'react-query';
import productApi from '../../../../Api/productApi';
import ModalDelete from '../../components/ModalDelete/index'
import { useHistory, useLocation } from 'react-router';
MainPage.propTypes = {

};

function MainPage(props) {
    const { isLoading, error, data, isFetching } = useQuery('products', productApi.getAll)
    const mutation = useMutation('deleteProduct', id => productApi.delete(id))
    const [productSelected, setProductSelected] = useState();
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const SetOffMessage = () => {
        history.push({ pathname: '/products', state: { message: '' } })
    }
    const handleRemoveClick = (product) => {
        setProductSelected(product);
        setModal(true);
    }
    const handleCloseModal = () => {
        setModal(false);
    }
    const handleConfirmModal = () => {
        mutation.mutate(productSelected._id);
        setModal(false);
        history.push({ pathname: '/products', state: { message: 'Delete success' } });
        // tại sao setModal nó không trigger để render lại page??
    }
    if (isLoading) return "Loading...."
    if (error) return "An Error orcurs"
    return (
        <>
            { location && location.state && location.state.message && <div className='message'>{location.state.message}</div>}
            { modal && <ModalDelete handleConfirmModal={handleConfirmModal} handleCloseModal={handleCloseModal} message={productSelected.name}  ></ModalDelete>}

            <ProductList handleRemoveClick={handleRemoveClick} productList={data} />
        </>
    );

}

export default MainPage;