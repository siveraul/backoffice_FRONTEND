import   { Fragment } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { Apexcharts1, Apexcharts2, Apexcharts3, Apexcharts4 } from '../../../common/chartdata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Apexcharts = () => {
  return(
  <Fragment>

    <Pageheader title="APEX CHARTS"  heading="Charts"   active="apex Charts" />
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">STACKED BAR CHART</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <Apexcharts1/>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">STACKED AREA CHART</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <Apexcharts2 />
          
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">LINE , COLUMN AND AREA CHART</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <Apexcharts3 />
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Pie Chart4</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1 piechart-01">
            <Apexcharts4 />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

};

Apexcharts.propTypes = {};

Apexcharts.defaultProps = {};

export default Apexcharts;
