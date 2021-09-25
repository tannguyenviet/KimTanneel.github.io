import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
Header.propTypes = {

};

function Header(props) {
    return (
        <div className='header mt-2'>
            <h2> {props.name}</h2>
        </div>
    );
}

export default Header;