import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './OrderCard.scss';

OrderCard.propTypes = {
  order: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

OrderCard.defaultProps = {
  order: {},
  onEditClick: null,
  onRemoveClick: null,
}

function OrderCard(props) {
  const { order, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(order);
  }

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(order);
  }

  return (

    <div>
      
    </div>
    // <div className="order">
    //   <img src={order.order} alt={order.title} />

    //   <div className="order__overlay">
    //     <h3 className="order__title">{order.title}</h3>

    //     <div className="order__actions">
    //       <div>
    //         <Button outline size="sm" color="light" onClick={handleEditClick}>
    //           Edit
    //         </Button>
    //       </div>

    //       <div>
    //         <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
    //           Remove
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default OrderCard;