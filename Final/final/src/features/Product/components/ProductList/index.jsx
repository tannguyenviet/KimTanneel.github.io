import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ProductCard from '../ProductCard';

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductEditClick: PropTypes.func,
  onProductRemoveClick: PropTypes.func,
};

ProductList.defaultProps = {
  productList: [],
  onProductEditClick: null,
  onProductRemoveClick: null,
};

function ProductList(props) {
  const { productList, onProductEditClick, onProductRemoveClick } = props;
  console.log('Productlist',productList);
  return (
    <Row>
      {productList.map(product => (
        <Col key={product.title} xs="12" md="6" lg="3">
          <ProductCard
            product={product}
            onEditClick={onProductEditClick}
            onRemoveClick={onProductRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;