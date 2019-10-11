import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderComponent from './../HeaderComponent';
import FooterComponent from './../FooterComponent';
import SidebarComponent from './../../components/SidebarComponent';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="layout">
                <HeaderComponent />

                {this.props.sidebar ?
                    <Container>
                        <Row>
                            <Col md={3} className='sidebar-box'>
                                <SidebarComponent />
                            </Col>
                            <Col md={9}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Container>
                        {this.props.children}
                    </Container>
                }

                <FooterComponent />
            </div>
        );
    }
}

Layout.defaultProps = {
    sidebar: false
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
    sidebar: PropTypes.bool
};

export default Layout;
