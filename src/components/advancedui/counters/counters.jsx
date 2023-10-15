import React from 'react';
import {  Row, Col, Card } from "react-bootstrap";
import { Middle, TimeCountingdaysLimit, Timers, Uptimer } from '../../../common/countersdata';
import { imagesData } from '../../../common/commonimages';
import { Fragment } from 'react';
import Pageheader from '../../../layout/layoutcomponent/pageheader';


const Counters = () => {
  return(
  <Fragment>
   <Pageheader title="COUNTERS"  heading="Advanced UI"   active="Counters" />
      <Row>
      <Col md={12} xxl={4}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Time Counting From 0</h3>
          </Card.Header>
          <Card.Body>
            <div className="example bg-primary-transparent border-primary text-primary">
              <div className="d-block d-sm-flex">
                <span className="tx-30 pe-3">
                  <i className="bi bi-alarm"></i>
                </span>
                <div className="">
                  <span id="timer-countup" className="h3">
                    <Uptimer />
                  </span>
                  <h5 className="mb-0 mt-1">Only 6 min left</h5>
                </div>
                <div className="ms-auto text-md-end text-start">
                  <h5 className="mb-1">Max Bid:</h5>
                  <span className="h3 mb-0">$1000</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xxl={4}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Time Counting From 60 to 20</h3>
          </Card.Header>
          <Card.Body>
            <div className="example bg-secondary-transparent border-secondary text-secondary">
              <div className="d-block d-sm-flex">
                <span className="tx-30 pe-3">
                  <i className="bi bi-alarm"></i>
                </span>
                <div className="">
                  <span id="timer-countinbetween" className="h3">
                    <Timers min={1} />
                  </span>
                  <h5 className="mb-0 mt-1">Only 6 min left</h5>
                </div>
                <span className="h1 ms-auto mb-0">$1000</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xxl={4}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Time minutes counter</h3>
          </Card.Header>
          <Card.Body>
            <div className="example bg-warning-transparent border-warning text-warning">
              <div className="d-block d-sm-flex flex-wrap">
                <span className="tx-30 pe-3">
                  <i className="bi bi-alarm"></i>
                </span>
                <div className="">
                  <span id="timer-countercallback" className="h3">
                    <Middle />
                  </span>
                  <h5 className="mb-0 mt-1">Only 6 min left</h5>
                </div>
                <span className="h1 text-center ms-auto mb-0">$1000</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Time Counting days Limit</h3>
          </Card.Header>
          <Card.Body className=" mx-auto">
            <div className="example bg-info text-white border border-info pb-4 px-5 position-relative">
              <div className="counter-side-badge">
                <span className="badge bg-danger">Hurry Up</span>
              </div>
              <span>Only we have two days</span>
              <div>
                <span className="text-white tx-30 pe-5">
                  <i className="bi bi-calendar-day"></i>
                </span>
                <span id="timer-outputpattern" className="h3">
                  <TimeCountingdaysLimit />
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={4} md={12} sm={12}>
        <Card className="custom-card">
          <Card.Body className=" text-center card-img-top-1">
            <div>
              <h6 className="card-title">Time Counting From 0</h6>
            </div>
            <img
              src={imagesData('illustrate')}
              alt="counter"
              className="wd-300 ht-300 "
            />
            <div className="pb-0 mt-4  bg-primary text-white p-3 br-5">
              <span id="timer-countup1" className="tx-26 mb-0">
                {" "}
                <Uptimer />
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} md={12} sm={12}>
        <Card className="custom-card">
          <Card.Body className=" text-center card-img-top-1">
            <div>
              <h6 className="card-title">Time Counting From 60 to 20</h6>
            </div>
            <img
              src={imagesData('illustrate1')}
              alt="counter"
              className="wd-300 ht-300 "
            />
            <div className="mt-4 bg-warning text-white p-3 br-5">
              <span id="timer-countinbetween1" className="tx-26 mb-0">
                {" "}
                <Timers min={1} />
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} md={12} sm={12}>
        <Card className="custom-card">
          <Card.Body className=" text-center card-img-top-1 ">
            <div>
              <h6 className="card-title">Time 1 minute counter</h6>
            </div>
            <img
              src={imagesData('illustrate2')}
              alt="counter"
              className="wd-300 ht-300 "
            />
            <div className="mt-4 bg-secondary text-white p-3 br-5">
              <span id="timer-countercallback1" className="tx-26 mb-0">
                <Middle />
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Fragment>
);}

Counters.propTypes = {};

Counters.defaultProps = {};

export default Counters;
