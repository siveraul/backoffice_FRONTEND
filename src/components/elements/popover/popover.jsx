import React from "react";
import { Fragment } from "react";
import { Card, Col, Collapse, Form, Row,Button, Popover, OverlayTrigger } from "react-bootstrap";
import Pageheader from "../../../layout/layoutcomponent/pageheader";

const Popovers = () => {
  const [Default, setDefault] = React.useState(false);
  const [Topbottomcolor, setTopbottomcolor] = React.useState(false);
  const [Topbottom, setTopbottom] = React.useState(false);
  return (
    <Fragment>
     <Pageheader title="POPOVERS"  heading="Elements"   active="Popover" /> 

      <Row>
        <Col xl={12} lg={12}>
          <Card id="popover">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">DEFAULT POPOVER</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setDefault(!Default)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Documentation and examples for adding Bootstrap popovers, like
                  those found in iOS, to any element on your site..
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="tx-10 mb-1 font-weight-bold text-muted text-uppercase">
                    STATIC EXAMPLE
                  </div>
                  <div className="popover-static-demo bg-gray-200">

                    <Row>
                      <Col md={6}>
                        <div className="popover bs-popover-top default">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover top</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                       
                      </Col>
                      
                      <Col md={6} className=" mg-t-30 mg-md-t-0">
                        <div className="popover bs-popover-bottom default">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover Bottom</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                       
                      </Col>
                     
                      <Col md={6} className=" mg-t-30">
                        <div className="popover bs-popover-start default">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover Left</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                        
                      </Col>
                      
                      <Col md={6} className=" mg-t-30">
                        <div className="popover bs-popover-end default">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover Right</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                       
                      </Col>
                      
                    </Row>
                   
                  </div>
                </div>
                <div className="example mt-4">
                  <div className="tx-10 mb-1 font-weight-bold text-muted text-uppercase">
                    Live EXAMPLE
                  </div>
                  <div className="pd-20 bg-gray-200">
                  <Row className="text-center">
      {["top", "right", "left","bottom",].map((placement) => (
        <Col sm={12}lg={3}  className="mg-t-30 mg-lg-t-0" key={placement}>
          <OverlayTrigger
            placement={placement}
            trigger="click"
            overlay={
              <Popover style={{ margin: "0px" }}>
                <Popover.Header as="h3">Popover {placement}</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="" className="mb-lg-0 mb-2 btn btn-primary">
              Click me
            </Button>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
                  </div>
                </div>
              </div>
              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example mt-4">
  <div className="tx-10 mb-1 font-weight-bold text-muted text-uppercase">
     Live EXAMPLE
  </div>
  <div className="pd-20 bg-gray-200">
    <Row>
      {["right", "top","bottom", "left"].map((placement) => (
        <Col sm={6}lg={3}  className="mg-t-30 mg-sm-t-0" key={placement}>
          <OverlayTrigger
            placement={placement}
            trigger="click"
            overlay={
              <Popover style={{ margin: "0px" }}>
                <Popover.Header as="h3">Popover {placement}</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="" className=" btn btn-primary">
              Click me
            </Button>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  </div>
</div>
          `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="popover2">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">DEFAULT POPOVER</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setTopbottomcolor(!Topbottomcolor)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Documentation and examples for adding Bootstrap popovers, like
                  those found in iOS, to any element on your site..
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="popover-static-demo bg-gray-200">
                    <Row>
                      <Col md={6}>
                        <div className="popover popover-head-primary bs-popover-top">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover top</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                        
                      </Col>
                      
                      <Col md={6} className=" mg-t-30 mg-md-t-0">
                        <div className="popover popover-head-primary bs-popover-bottom">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover Bottom</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                       
                      </Col>
                      
                    </Row>
                  </div>
                </div>
                <div className="example mt-4">
                  <div className="pd-20 bg-gray-200">

                    <Row className=" row-sm tx-center">
                      <Col lg={3} sm={6}>

                      <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={
        <Popover style={{ margin: "0px" }} className="popover-head-primary">
          <Popover.Header as="h3" className="popover-headers ">
            Popover Top
          </Popover.Header>
          <Popover.Body style={{ margin: "0px" }}>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="" className="btn btn-primary">
        Click me
      </Button>
    </OverlayTrigger>
                      </Col>
                     
                      <Col lg={3} sm={6} className=" mg-t-30 mg-sm-t-0">

                      <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover
          style={{ margin: "0px" }}
          className="popover-head-primary bs-popover-bottom"
        >
          <Popover.Header as="h3" className="popover-headers ">
            Popover Bottom
          </Popover.Header>
          <Popover.Body style={{ margin: "0px" }}>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="" className="btn btn-primary">
        Click me
      </Button>
    </OverlayTrigger>
                      </Col>
                    
                    </Row>
                  </div>
                </div>
              </div>
              <Collapse in={Topbottomcolor} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example mt-4">
  <div className="pd-20 bg-gray-200">
   <Row className=" row-sm tx-center">
    <Col lg={3} sm={6}>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={
          <Popover style={{ margin: "0px" }} className="popover-head-primary">
            <Popover.Header as="h3" className="popover-headers ">
              Popover Top
            </Popover.Header>
            <Popover.Body style={{ margin: "0px" }}>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="" className="btn btn-primary">
          Click me
        </Button>
      </OverlayTrigger>
    </Col>
    <Col lg={3} sm={6} className=" mg-t-30 mg-sm-t-0">
       <OverlayTrigger
         trigger="click"
         placement="bottom"
         overlay={
          <Popover
            style={{ margin: "0px" }}
            className="popover-head-primary bs-popover-bottom"
          >
            <Popover.Header as="h3" className="popover-headers ">
              Popover Bottom
            </Popover.Header>
            <Popover.Body style={{ margin: "0px" }}>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </Popover.Body>
          </Popover>
          }
        >
          <Button variant="" className="btn btn-primary">
            Click me
          </Button>
        </OverlayTrigger>                
    </Col> 
   </Row>
  </div>
</div>
                        `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="popover3">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">DEFAULT POPOVER</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setTopbottom(!Topbottom)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Documentation and examples for adding Bootstrap popovers, like
                  those found in iOS, to any element on your site..
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="popover-static-demo bg-gray-200">
                    <Row>
                      <Col md={6}>
                        <div className="popover popover-primary bs-popover-top">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover top</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                       
                      </Col>
                      
                      <Col md={6} className=" mg-t-30 mg-md-t-0">
                        <div className="popover popover-secondary bs-popover-bottom">
                          <div className="popover-arrow"></div>
                          <h3 className="popover-header">Popover Bottom</h3>
                          <div className="popover-body">
                            <p>
                              Sed posuere consectetur est at lobortis. Aenean eu
                              leo quam. Pellentesque ornare sem lacinia quam
                              venenatis vestibulum.
                            </p>
                          </div>
                        </div>
                       
                      </Col>
                      
                    </Row>
                  </div>
                </div>
                <div className="example mt-4">
                  <div className="pd-20 bg-gray-200">

                    <Row className=" row-sm tx-center">
                      <Col lg={3} sm={6}>
                      <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={
            <Popover style={{ margin: "0px" }} className="popover-primary">
              <Popover.Header as="h3" className="popover-headers ">
                Popover Top
              </Popover.Header>
              <Popover.Body style={{ margin: "0px" }}>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="" className="btn btn-primary">
            Click me
          </Button>
        </OverlayTrigger>
                      </Col>
                     
                      <Col lg={3} sm={6} className=" mg-t-30 mg-sm-t-0">
                     
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover style={{ margin: "0px" }} className="popover-secondary">
              <Popover.Header as="h3" className="popover-headers ">
                Popover Bottom
              </Popover.Header>
              <Popover.Body style={{ margin: "0px" }}>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="" className="btn btn-secondary">
            Click me
          </Button>
        </OverlayTrigger>
                      </Col>
                    
                    </Row>
                  </div>
                  <Collapse in={Topbottom} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="example mt-4">
  <div className="pd-20 bg-gray-200">
    <Row className=" row-sm tx-center">
      <Col lg={3} sm={6}>
        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={
            <Popover style={{ margin: "0px" }} className="popover-primary">
              <Popover.Header as="h3" className="popover-headers ">
                Popover Top
              </Popover.Header>
              <Popover.Body style={{ margin: "0px" }}>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="" className="btn btn-primary">
            Click me
          </Button>
        </OverlayTrigger>
      </Col>
      <Col lg={3} sm={6} className=" mg-t-30 mg-sm-t-0">
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover style={{ margin: "0px" }} className="popover-secondary">
              <Popover.Header as="h3" className="popover-headers ">
                Popover Bottom
              </Popover.Header>
              <Popover.Body style={{ margin: "0px" }}>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="" className="btn btn-secondary">
            Click me
          </Button>
        </OverlayTrigger>
      </Col>
    </Row>
  </div>
</div>
                      `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </Fragment>
  );
}

Popovers.propTypes = {};

Popovers.defaultProps = {};

export default Popovers;
