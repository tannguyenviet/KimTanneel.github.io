import React from 'react';
import PropTypes from 'prop-types';

ModalDelete.propTypes = {
    message: PropTypes.string,
    handleCloseModal: PropTypes.func,
    handleConfirmModal: PropTypes.func,
};
function ModalDelete(props) {
    const { message, handleCloseModal, handleConfirmModal } = props;
    return (
        <div >
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal Product</h5>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Do you want to delete this {message}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleCloseModal} className="btn btn-secondary">Close</button>
                        <button onClick={handleConfirmModal} className="btn btn-danger">Delete</button>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default ModalDelete;