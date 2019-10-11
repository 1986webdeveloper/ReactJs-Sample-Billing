import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import SendInvoiceModal from './../Modals/SendInvoiceModal';

import './styles.scss';

class SidebarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoiceModal: false,
      currentStats: 'sent',
      invoiceStats: [
        { type: 'sent', name: 'Sent', value: 25 },
        { type: 'cancelled', name: 'Cancelled', value: 1 },
        { type: 'scheduled', name: 'Scheduled', value: 2 },
        { type: 'draft', name: 'Draft', value: 3 },
      ]
    }
  }
  
  openInvoiceModal = () => {
    this.setState({ invoiceModal: true });
  }
  
  closeInvoiceModal = () => {
    this.setState({ invoiceModal: false });
  }

  selectStats = (type) => {
    this.setState({ currentStats : type})
  }

  getStatsClassName(type){
    var className = 'action-link ';
    className +=  ( type === this.state.currentStats ) ? 'active' : '';

    return className;
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <h4>
            <img src={require('./../../assets/images/create-invoice-coin.png')} alt="Coin" />
            <span>Billing</span>
          </h4>
          <p>Dashboard</p>
        </div>
        <div className="sidebar-links">

          <Nav.Link className='active' href="#overview">
            <img src={require('./../../assets/images/overview-icon.png')} alt="Overview" />
            <span>Overview</span>
          </Nav.Link>

          <Nav.Link href="#setting">
            <img src={require('./../../assets/images/setting-icon.png')} alt="Setting" />
            <span>Setting</span>
          </Nav.Link>

          <Nav.Link href="#new-invoice">
            <Button className='btn-custom' onClick={this.openInvoiceModal}>+ New Invoice</Button>
          </Nav.Link>


          {this.state.invoiceStats.map((item, key) =>
            <Nav.Link key={key} onClick={() => this.selectStats(item.type)} className={this.getStatsClassName(item.type)} href={"#"+item.type}>
              <span>{item.name}</span>
              <span>{item.value}</span>
            </Nav.Link>
          )}

        </div>

        <SendInvoiceModal open={this.state.invoiceModal} onClose={this.closeInvoiceModal} />
      </div>
    );
  }
}

export default SidebarComponent;
