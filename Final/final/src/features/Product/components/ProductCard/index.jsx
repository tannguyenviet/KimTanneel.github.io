import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './ProductCard.scss';

ProductCard.propTypes = {
  product: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

ProductCard.defaultProps = {
  product: {},
  onEditClick: null,
  onRemoveClick: null,
}

function ProductCard(props) {
  const { product, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(product);
  }

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(product);
  }

  return (
    <div className="product">
      <img src={product.product} alt={product.name} />

      <div className="product__overlay">
        <h2>{product.price} $</h2>
        <h3 className="product__title">{product.name}</h3>

        <div className="product__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;