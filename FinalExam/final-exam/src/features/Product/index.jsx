import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.scss'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import ProductList from './components/ProductList/index';
import ProductForm from '../Product/components/ProductForm/index';
import NotFound from '../../components/NotFound/index';
import { Link } from 'react-router-dom';
import ProductFormEdit from '../Product/components/ProductFormEdit/index';
import MainPage from './page/Main';
import AddPage from './page/Add';
import EditPage from './page/Edit'
Product.propTypes = {

};

function Product(props) {
    const match = useRouteMatch();


    return (
        <div>
            <div className='product'>
                <h3 className='product-header'>Welcome to product</h3>
                {/* {page === 'List' && <button onClick={handleChangePage} className='product-btn'>Add new Product</button>}
                {page === 'Form' && <button onClick={handleChangePage} className='product-btn'>Return List</button>}
                <Link className='btn btn-primary' to='/products/add'>Add new Product</Link> */}
            </div>

            <Switch>
                <Route exact path={match.url} component={MainPage} />
                <Route path={`${match.url}/add`} component={AddPage} />
                <Route path={`${match.url}/:productId`} component={EditPage} />
                <Route component={NotFound} />
            </Switch>

            {/* {page === 'List' ? <ProductList /> : <ProductForm />} */}

        </div>
    );
}

export default Product;