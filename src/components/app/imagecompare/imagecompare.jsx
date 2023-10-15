import React, { Fragment }  from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import ReactCompareImage from "react-compare-image";
import img1 from "../../../assets/img/photos/compare1.jpg";
import img2 from "../../../assets/img/photos/compare2.jpg";
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Imagecompare = () => {
  return(
  <Fragment>

    <Pageheader title="IMAGE COMPARISION" heading="Apps" active="Image-compare" />

    <Row>
      <Col sm={12} md={12} lg={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Horizontal Image Comparision
            </div>
            <p className="mg-b-20">
              Example of nowa Horizontal Image Comparision.
            </p>
            <div className="twentytwenty-container"><ReactCompareImage leftImage={img1} rightImage={img2}  /></div>
          </Card.Body>
        </Card>
    
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Vertical Image Comparision
            </div>
            <p className="mg-b-20">
              Example of nowa Vertical Image Comparision.
            </p>
            <div className="twentytwenty-container" data-orientation="vertical">
            <ReactCompareImage leftImage={img1} rightImage={img2} vertical="true" />
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  </Fragment>
);
}
Imagecompare.propTypes = {};

Imagecompare.defaultProps = {};

export default Imagecompare;
