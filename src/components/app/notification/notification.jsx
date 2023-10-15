import React, { Fragment } from "react";
import {  Button, Card, Row, Col, Form, Toast } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import Toastdata from "../../../common/toastfunctionaldata";
import Pageheader from "../../../layout/layoutcomponent/pageheader";


const Notification = () => {
  const Default = () => toast.success(<p className="text-white tx-16 mb-0">
  Well done Details Submitted Successfully</p>,
  {
    style: {
      borderRadius: '5px',
      background: '#07bc0c',
      boxShadow:'none',
      color: '#fff',
    },
    position: "top-right",
    duration: 5000,
    iconTheme: {
      primary: '#fff',
      secondary: '#07bc0c',
    },
  }
);
const Center = () => toast.error(<p className="text-white tx-16 mb-0">Default Center Notification</p>,
  {
    style: {
      borderRadius: '5px',
      background: '#dc3545',
      boxShadow:'none',
      color: '#fff',
    },
    position: "top-center",
    duration: 5000,
    iconTheme: {
      primary: '#fff',
      secondary: '#dc3545',
    },
  }
);
const Left = () => toast(<p className="text-white tx-16 mb-0">Default Left Notification</p>,
  {
    style: {
      borderRadius: '5px',
      background: '#ffc107',
      boxShadow:'none',
      color: '#fff',
    },
    position: "top-left",
    duration: 5000,
    iconTheme: {
      primary: '#fff',
      secondary: '#ffc107',
    },
  }
);
  const [toast11, setToast11] = React.useState(true);
  const [position, setPosition] = React.useState();
  const [show, setShow] = React.useState(true)
  return (
    <Fragment>
      <Pageheader title="NOTIFICATIONS" heading="Apps" active="Notifications" />

 
      <Row>
        <Col md={12}>

          <Card className="mg-b-20">
            <Card.Body>
              <h3 className="card-title  mg-b-10">Position Notification</h3>
              <div className="example border-0 p-0">
                <div className="btn-list">
                <Button onClick={Default} variant="" className="btn btn-primary mg-t-5"> Top</Button>
                  <Toaster reverseOrder={false} />
                  <Button onClick={Center} variant="" className="btn btn-primary mg-t-5"> Center</Button>
                  <Toaster reverseOrder={false}  />
                  <Button onClick={Left} variant="" className="btn btn-primary mg-t-5" > Left</Button>
                  <Toaster reverseOrder={false} />
                </div>
              </div>
            </Card.Body>
          </Card>
          <Toastdata/>

  
          <Card>
            <Card.Body>
              <h3 className="card-title  mg-b-10">Select Notification Placement</h3>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <Card.Body>
                          <p className="text-muted">Various example of <code>toast placement</code>.</p>

                          <Form className="formnotification">
                            <div className="mb-3">
                              <select className="form-select mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
                                <option label="top-end" value="top-0 end-0" defaultValue >Top right</option>
                                <option label="top-start" value="top-0 start-0" >Top left</option>
                                <option label="top-center" value="top-0 start-50 translate-middle-x">Top center</option>
                                <option label="middle-start" value="top-50 start-0 translate-middle-y">Middle left</option>
                                <option label="middle-center" value="top-50 start-50 translate-middle">Middle center</option>
                                <option label="middle-end" value="top-50 end-0 translate-middle-y">Middle right</option>
                                <option label="bottom-start" value="bottom-0 start-0">Bottom left</option>
                                <option label="bottom-center" value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                <option label="bottom-end" value="bottom-0 end-0">Bottom right</option>
                              </select>
                            </div>
                          </Form>
                          <div className="">
                            <div className="bg-light position-relative ht-300" >
                              <div className={"p-3 position-absolute " + position} >
                                {show ? <Toast >
                                  <Toast.Header onClick={() => setToast11(!toast11)}>
                                    Select Notification
                                    <Button variant="" className="d-flex ms-auto" onClick={() => setShow(false)}><i className="fe text-dark fe-x"></i></Button>
                                  </Toast.Header>
                                  <Toast.Body>
                                    Hello, world! This is a toast message.

                                  </Toast.Body>
                                </Toast> : null}
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Fragment>
  );
}

Notification.propTypes = {};

Notification.defaultProps = {};

export default Notification;
