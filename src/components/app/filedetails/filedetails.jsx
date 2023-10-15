import { Fragment } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { LightGallery1 } from '../../../common/galleryfunctionaldata';

const Filedetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 3000,
          autoplay: true
        }
      }
    ]

  };

  return (
    <Fragment>

      <Pageheader title="FILE DETAILS" heading="Apps" active="File details" />

      <Row className=" row-sm">
        <Col xxl={8} xl={12} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className=" px-4 pt-4">
              <Link to={`${import.meta.env.BASE_URL}advancedui/blogdetails/`}>
                <img
                  src={imagesData('blog')}
                  alt=""
                  className="cover-image br-7 w-100"
                />
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={12} lg={12} xxl={4}>
          <Card className="custom-card">
            <Card.Body>
              <h5 className="mb-3">File details :</h5>
              <div className="">
                <Row className="">
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="table mb-0 border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">File-name</th>
                            <td>image.jpg</td>
                          </tr>
                          <tr>
                            <th scope="row">File-size</th>
                            <td>12.45mb</td>
                          </tr>
                          <tr>
                            <th scope="row">uploaded-date</th>
                            <td>01-12-2020</td>
                          </tr>
                          <tr>
                            <th scope="row">uploaded-by</th>
                            <td>prityy abodh</td>
                          </tr>
                          <tr>
                            <th scope="row">image-width</th>
                            <td>1000</td>
                          </tr>
                          <tr>
                            <th scope="row">image-height</th>
                            <td>600</td>
                          </tr>
                          <tr>
                            <th scope="row">File-formate</th>
                            <td>jpg</td>
                          </tr>
                          <tr>
                            <th scope="row">File-location</th>
                            <td>storage/photos/image.jpg</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={8} xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body className=" h-100">
              <div>
                <Slider {...settings}>

                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage4')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage1')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage2')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage3')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage4')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage5')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage1')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                          <img className=""
                            alt=""
                            src={imagesData('fileimage3')}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={12} lg={12} xxl={4}>
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="mb-3">Recent Files</h5>
              <Row className=" row-sm file-detailimg">

                <LightGallery1 />

              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
};

Filedetails.propTypes = {};

Filedetails.defaultProps = {};

export default Filedetails;
