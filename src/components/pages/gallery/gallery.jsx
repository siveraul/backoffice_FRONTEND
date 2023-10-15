import React, { Fragment } from "react";
import { Breadcrumb, Col, Pagination, Row } from "react-bootstrap";
import { LightGallery } from "../../../common/galleryfunctionaldata";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
const Gallery = () => {

  const PhotobookImage = ({ url }) => (
    <React.Fragment>
      <img src={url} alt="" />
    </React.Fragment>
  );


  return (
    <Fragment>
     <Pageheader title="GALLERY"  heading="Pages"   active="Gallery" />


      <Row className="masonry">
         <LightGallery />
      </Row>

      <Row className=" mb-5">
        <Col md={6} className="mt-1 d-none d-md-block text-dark">
          1 - 10 of 234 photos
        </Col>
        <Pagination className="pagination product-pagination ms-auto float-end">
          <Pagination.Item className="page-item page-prev disabled">
            Prev
          </Pagination.Item>
          <Pagination.Item className="page-item active">1</Pagination.Item>
          <Pagination.Item className="page-item">2</Pagination.Item>
          <Pagination.Item className="page-item">3</Pagination.Item>
          <Pagination.Item className="page-item">4</Pagination.Item>
          <Pagination.Item className="page-item page-next">Next</Pagination.Item>
        </Pagination>
      </Row>
    </Fragment>
  );
}

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
