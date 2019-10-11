import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateInvoiceSync from './../../assets/images/create-invoice-sync.png';

import './styles.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={CreateInvoiceSync} alt="Create Invoice" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#sis">
                  <img src={require('./../../assets/images/create-invoice-oval.png')} alt="SIS" />
                  <span>SIS</span>
                </Nav.Link>

                <Nav.Link href="#members">Members</Nav.Link>

                <Nav.Link href="#groups">Groups</Nav.Link>
              </Nav>

              <Nav className="right-menu">
                <Nav.Link href="#home">
                  <img src={require('./../../assets/images/create-invoice-icon--home.png')} alt="Home" />
                </Nav.Link>

                <Nav.Link href="#calender">
                  <img src={require('./../../assets/images/create-invoice-shape.png')} alt="Calender" />
                </Nav.Link>

                <Nav.Link href="#book">
                  <img src={require('./../../assets/images/create-invoice-icon--academic-o.png')} alt="Book" />
                </Nav.Link>

                <Nav.Link href="#bill">
                  <img src={require('./../../assets/images/create-invoice-icon--bill-o.png')} alt="Bill" />
                </Nav.Link>

                <Nav.Link href="#notification">
                  <img src={require('./../../assets/images/create-invoice-uea3c.png')} alt="notification" />
                  <img src={require('./../../assets/images/create-invoice-morevert---material.png')} alt="notification" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
