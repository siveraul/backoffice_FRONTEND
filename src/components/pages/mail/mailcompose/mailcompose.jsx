import  { Fragment } from 'react';
import {  Button, Card, Col, Dropdown, Form, FormGroup, Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../layout/layoutcomponent/pageheader';
import { Mailcomposedata } from '../../../../common/commondata';

const MailCompose = () =>{ 
  return(
  <Fragment>
    
 <Pageheader title="MAIL COMPOSE"  heading="Mail"   active="Mail Compose" />

    <Row className=" row-sm">
     
      <Col lg={4} xl={3} md={12} sm={12}>
        <Card className="mg-b-20">
          <Card.Body className="main-content-left main-content-left-mail card-body">
            <Button
              variant=""
              className="btn btn-primary btn-compose"
              id="btnCompose"
            >
              Compose
            </Button>
            <div className="main-mail-menu">
              <Nav
                className="nav main-nav-column mg-b-20"
                defaultActiveKey="Inbox"
              >
                {Mailcomposedata.map((idx)=>(
                <Nav.Item key={Math.random()}>
                  <Nav.Link className="nav-link thumb " eventKey={idx.key}>
                    <i className={idx.icon}></i> {idx.text1} <span>{idx.text2}</span>
                  </Nav.Link>
                </Nav.Item>
                ))}

              </Nav>
              <Form.Label className="main-content-label main-content-label-sm">
                Settings
              </Form.Label>
              <Nav className="nav main-nav-column" defaultActiveKey="Email">
                <Nav.Item>
                  <Nav.Link className="nav-link " eventKey="Email">
                    Email Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

          </Card.Body>
        </Card>
      </Col>
   
      <Col lg={8} xl={9} md={12} sm={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Compose new message</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <FormGroup className="form-group">
                <Row className=" align-items-center">
                  <Col as="label" sm={2}>
                    To
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="text" className="form-control" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="form-group">
                <Row className=" align-items-center">
                  <Col as="label" sm={2}>
                    Subject
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="text" className="form-control" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="form-group">
                <Row className=" ">
                  <Col as="label" sm={2}>
                    Message
                  </Col>
                  <Col sm={10}>
                    <textarea rows={10} className="form-control"></textarea>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Card.Body>
          <div className="main-chat-footer d-sm-flex">
            <Nav className="nav">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Attach</Tooltip>}
              >
                <i className="nav-link bx bx-paperclip text-muted tx-18"></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Link</Tooltip>}
              >
                <i className="nav-link bx bx-link text-muted tx-18"></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Photos</Tooltip>}
              >
                <i className="nav-link bx bx-image text-muted tx-18"></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Delete</Tooltip>}
              >
                <i className="nav-link bx bx-trash text-muted tx-18"></i>
              </OverlayTrigger>
            </Nav>
            <div className="btn-list ms-auto">
            <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Send</Tooltip>}
                    >
                      <Link className="main-msg-send bg-primary text-white" to="#">
                <i className="far fa-paper-plane"></i>
              </Link>
                    </OverlayTrigger>
             
              <Dropdown as="span">
                <Dropdown.Toggle
                variant=''
                  className="ms-2 br-5 more-option border "
                  data-bs-toggle="dropdown"
                >
                  <i className="fe fe-more-vertical align-middle"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu tx-13" style={{margin:"0px"}}>
                  <Dropdown.Item className="dropdown-item" href="#">
                    Schedule send
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="#">
                    Mark As Important
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="#">
                    Discard
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="#">
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="#">
                    Help and feedback
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
 
  </Fragment>
);
};
MailCompose.propTypes = {};

MailCompose.defaultProps = {};

export default MailCompose;
