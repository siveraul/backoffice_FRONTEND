import React, { Fragment, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Pageheader from "../../../layout/layoutcomponent/pageheader";


const Collapse = () => {
  let [isFirstCollapseds, setisFirstCollapseds] = useState(false);
  let [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  let [isSecondCollapsed, setisSecondCollapsed] = useState(false);
  let firsts = () => {
    if (isFirstCollapseds === false) {
      setisFirstCollapseds(true);
    } else if (isFirstCollapseds === true) {
      setisFirstCollapseds(false);
    }
  };
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  let second = () => {
    console.log(isSecondCollapsed === !isSecondCollapsed);
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    } else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };
  let both = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    } else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    } else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
  };
  return (
    <Fragment>
      <Pageheader title="COLLAPSE"  heading="Advanced UI"   active="Collapse" />

     
      <Row>
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  Click the buttons below to show and hide another element via
                  className changes
                </p>
              </div>
              <div>
                <Button variant=""
                  className="btn ripple btn-primary"

                  role="button"
                  onClick={() => firsts()}
                >
                  Toggle Content
                </Button>
                <>
                  {isFirstCollapseds ? (
                    <div className="" id="collapseExample">
                      <div className="mt-4">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt
                        sapiente ea proident.
                      </div>
                    </div>) : null}
                </>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Multiple Targets</h6>
                <p className="text-muted card-sub-title">
                  A button or link can show and hide multiple elements by
                  referencing them with a jquery selector in its href or
                  data-bs-target attribute.
                </p>
              </div>
              <div>
                <div className="btn-list">
                  <Button
                    variant=""

                    className="btn ripple btn-primary mb-2 mb-xl-0 me-2"

                    role="button"
                    onClick={() => first()}
                  >
                    Toggle First Content
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-secondary mb-2 mb-xl-0 me-2"
                    role="button"
                    onClick={() => second()}
                  >
                    Toggle Second Content
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-success mb-2 mb-xl-0"
                    role="button"
                    onClick={() => both()}
                  >
                    Toggle Both Contents
                  </Button>
                </div>
                <Row className="row-sm">
                  {isFirstCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="mt-4">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {isSecondCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="mt-4">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  ) : null}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Fragment>
  );
};

Collapse.propTypes = {};

Collapse.defaultProps = {};

export default Collapse;
