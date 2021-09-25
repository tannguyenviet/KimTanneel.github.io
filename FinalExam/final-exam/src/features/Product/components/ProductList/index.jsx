import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.scss'
import productApi from '../../../../Api/productApi';
import { useQuery } from 'react-query'
import axios from 'axios';
import { ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';
ProductList.propTypes = {
    productList: PropTypes.array,
    handleRemoveClick: PropTypes.func,
};
ProductList.defaultValue = {
    productList: [],
    handleRemoveClick: null
}


function ProductList(props) {

    const { productList, handleRemoveClick } = props;
    const onClickDelete = (product) => {
        if (!handleRemoveClick) return;
        handleRemoveClick(product);
    }
    return (
        <div className='product-list m-5'>
            <Link className='btn btn-primary mb-3' to='/products/add'>Add new Product</Link>
            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, index) => (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/products/${product._id}`} className='btn btn-primary'>Edit</Link>
                            </td>
                            <td>
                                <button onClick={() => onClickDelete(product)} className='btn btn-danger'>Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;