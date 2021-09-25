import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OrderList from '../../components/OrderList';
import { useMutation, useQuery } from 'react-query';
import orderApi from '../../../../Api/orderApi';
import ModalDelete from '../../components/ModalDelete/index'
import { useHistory, useLocation } from 'react-router';
MainPage.propTypes = {

};

function MainPage(props) {
    console.log('Main Page Order');
    const { isLoading, error, data, isFetching } = useQuery('orders', orderApi.getAll)
    const mutation = useMutation('deleteOrder', id => orderApi.delete(id))
    const [orderSelected, setOrderSelected] = useState();
    const [modal, setModal] = useState(false);
    const location = useLocation();

    const handleRemoveClick = (order) => {
        setOrderSelected(order);
        setModal(true);
    }
    const handleCloseModal = () => {
        setModal(false);
    }
    const handleConfirmModal = () => {
        mutation.mutate(orderSelected._id);
        setModal(false);
        // tại sao setModal nó không trigger để render lại page??
    }
    if (isLoading) return "Loading...."
    if (error) return "An Error orcurs"
    return (
        <>
            { location && location.state && location.state.message && <div className='message'>{location.state.message}</div>}
            { modal && <ModalDelete handleConfirmModal={handleConfirmModal} handleCloseModal={handleCloseModal} message={orderSelected.name}  ></ModalDelete>}

            <OrderList handleRemoveClick={handleRemoveClick} orderList={data} />
        </>
    );

}

export default MainPage;