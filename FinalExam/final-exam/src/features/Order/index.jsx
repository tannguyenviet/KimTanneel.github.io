import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Order.scss'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import OrderList from '../Order/components/OrderList/index';
import OrderForm from '../Order/components/OrderForm/index';
import NotFound from '../../components/NotFound/index';
import { Link } from 'react-router-dom';
import OrderFormEdit from './components/OrderFormEdit/index';
import MainPage from './page/Main';
import AddPage from './page/Add';
import EditPage from './page/Edit';
OrderForm.propTypes = {

};

function Order(props) {
    const match = useRouteMatch();
    console.log('match', match);
    const history = useHistory();
    const [page, setPage] = useState('List');
    const handleChangePage = () => {
        if (page === 'List') {
            setPage('Form');
            history.push('OrderForms/add');
        } else {
            setPage('List')
            history.push('OrderForms');
        }
    }
    return (
        <div>
            <div className='OrderForm'>
                <h3 className='OrderForm-header'>Welcome to OrderForm</h3>
            </div>
            <Switch>
                <Route exact path={match.url} component={MainPage} />
                <Route path={`${match.url}/add`} component={AddPage} />
                <Route path={`${match.url}/:orderId`} component={EditPage} />
                <Route component={NotFound} />
            </Switch>
        </div>

    );
}

export default Order;