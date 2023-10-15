import React,  { Fragment } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { Basicwizard, Vertical, WizardForm } from '../../../common/formwizarddata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const FormWizard = () =>{
return (
  <Fragment>

   <Pageheader title="FORM WIZARD"  heading="Forms"   active="Form Wizard" />

    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Basic Content Wizard
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>

            <div id="wizard1" className="border">
              <Basicwizard  />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Basic Wizard With Validation
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <div id="wizard2">
              <WizardForm/>
              
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Vertical Orientation Wizard
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <div id="wizard3">
              <Vertical/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Fragment>
);};

FormWizard.propTypes = {};

FormWizard.defaultProps = {};

export default FormWizard;




