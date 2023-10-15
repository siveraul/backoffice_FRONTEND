import   { Fragment } from "react";
import {  Card, Col, Row } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";
import * as echarts from "../../../common/chartdata";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
const Echart = () => {
  return(
  <Fragment>

    <Pageheader title="ECHART CHARTS"  heading="Charts"   active="Echart Charts" />
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart5" className="ht-300">
              <ReactEcharts
                option={echarts.echart5.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart6" className="ht-300">
              <ReactEcharts
                option={echarts.echart6.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Bar Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart1" className="ht-300">
              <ReactEcharts
                option={echarts.echart1.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Vertical Bar Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart3" className="ht-300">
              <ReactEcharts
                option={echarts.echart3.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Line Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart2" className="ht-300">
              <ReactEcharts
                option={echarts.echart2.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Vertical Line Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart4" className="ht-300">
              <ReactEcharts
                option={echarts.echart4.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart7" className="ht-300">
              <ReactEcharts
                option={echarts.echart7.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart8" className="ht-300">
              <ReactEcharts
                option={echarts.echart8.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="">
              <ReactEcharts
                className="ht-300"
                option={echarts.echart9.option}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Fragment>
);
};

Echart.propTypes = {};

Echart.defaultProps = {};

export default Echart;
