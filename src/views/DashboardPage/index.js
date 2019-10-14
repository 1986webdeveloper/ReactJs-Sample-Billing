import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

import Layout from './../../components/Layout';
import WidgetBlock from './../../components/Blocks/WidgetBlock';
import KnobBlock from './../../components/Blocks/KnobBlock';
import CustomBarChart from './../../components/Blocks/CustomBarChart';
import './styles.scss';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistics_data : {
        months: ['MARCH', 'APRIL', 'MAY', 'JUNE'],
        sent : [60, 48, 30, 0],
        paid : [20, 35, 40, 45],
        unpaid : [0, 0, 10, 0],
      }
    }
  }

  render() {
    return (
      <Layout sidebar={true}>
        <Card className='dashboard'>
          <Card.Header>
            <Card.Title>
              <span>Statistics</span>
              <Dropdown className='statistics-filter-box'>
                <Dropdown.Toggle  className='btn-transparent' id="statistics-time">All Time</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/7days">Last 7 Days</Dropdown.Item>
                  <Dropdown.Item href="#/1month">Last 1 month</Dropdown.Item>
                  <Dropdown.Item href="#/1year">Last 1 year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='invoice-section'>
              <Row>
                <Col><h4 className='text-center'>Invoices</h4></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <WidgetBlock currencySymbol={'RM'} amount={"50K"} type={"Sent"} total={"455"} varient={'default'} />
                </Col>
                <Col md="auto">
                  <WidgetBlock currencySymbol={'RM'} amount={"30K"} type={"Paid"} total={"212"} varient={'success'} />
                </Col>
                <Col md="auto">
                  <WidgetBlock currencySymbol={'RM'} amount={"20K"} type={"Unpaid"} total={"189"} varient={'danger'} />
                </Col>
              </Row>
            </div>

            <div className='invoice-section'>
              <Row>
                <Col><h4 className='text-center'>Conversion</h4></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <KnobBlock value="40" varient={'success'} type={"Paid Within Time"} />
                </Col>
                <Col md="auto">
                  <KnobBlock value="40" varient={'info'} type={"Paid Late"} />
                </Col>
                <Col md="auto">
                  <KnobBlock value="20" varient={'danger'} type={"Unpaid Overdue"} />
                </Col>
              </Row>

              <Row className='chart-section'>
                <Col>
                  <CustomBarChart statistics_data={this.state.statistics_data} />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

      </Layout>
    );
  }
}

export default DashboardPage;
