import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Napa Aplication
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

Header.propTypes = {

}

export default Header

