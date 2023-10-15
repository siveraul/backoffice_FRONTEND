import React, {Fragment, useState} from "react";
import { Breadcrumb, Card, Col, Row,Button, Modal  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagesData } from "../../../common/commonimages";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
import { cardsdata1, cardsdata10, cardsdata2, cardsdata3, cardsdata4, cardsdata5, cardsdata6, cardsdata7, cardsdata8, cardsdata9 } from "../../../common/commondata";

const Cards = () => {
  const [show, setShow] =useState(true);
  let [isFirstCollapsed, setisFirstCollapsed] =useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true)
    }
    else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false)
    }
  }


  const [remove, Setremove] =useState(true);
  const values = [
    true,
  ];
  const [fullscreen, setFullscreen] =useState(true);
  const [shows, setShows] =useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShows(true);
  }
  let [isFirstCollapseds, setisFirstCollapseds] =useState(true);
  let firsts = () => {
    if (isFirstCollapseds === false) {
      setisFirstCollapseds(true);
    } else if (isFirstCollapseds === true) {
      setisFirstCollapseds(false);
    }
  };
  return (
    <Fragment>
            <Pageheader title="CARDS" heading="Apps" active="Cards" />

<Row className="row-sm">
  {cardsdata1.map((idx, cd1) => (
    <Col sm={12} md={12} lg={4} xl={4} key={cd1}>
      <Card className={idx.class}>
        <Card.Body>
          {idx.text}
        </Card.Body>
      </Card>
    </Col>
  ))}

</Row>

<Row className="row-sm">
  <Col sm={12} md={12} lg={4} xl={4}>
    <Card className="bg-gray-200 bd-0">
      <Card.Body>
        <h5 className="card-title tx-dark tx-medium mg-b-10">
          The Card Title
        </h5>
        <p className="card-subtitle mg-b-15">This is the card subtitle</p>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <Link className="card-link" to="#">
          Card link
        </Link>{" "}
        <Link className="card-link" to="#">
          Another link
        </Link>
      </Card.Body>
    </Card>
  </Col>
  <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
    <Card className=" bg-primary tx-white bd-0">
      <Card.Body>
        <h5 className="card-title tx-white tx-medium mg-b-10">
          The Card Title
        </h5>
        <p className="card-subtitle mg-b-15 tx-white-8">
          This is the card subtitle
        </p>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <Link className="card-link tx-white-7 hover-white" to="#">
          Card link
        </Link>{" "}
        <Link className="card-link tx-white-7 hover-white" to="#">
          Another link
        </Link>
      </Card.Body>
    </Card>
  </Col>
  <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
    <Card className=" bg-secondary tx-white bd-0">
      <Card.Body>
        <h5 className="card-title card-title2 tx-white tx-medium mg-b-10">
          The Card Title
        </h5>
        <p className="card-subtitle tx-white-8 mg-b-15">
          This is the card subtitle
        </p>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <Link className="card-link tx-white-7 hover-white" to="#">
          Card link
        </Link>{" "}
        <Link className="card-link tx-white-7 hover-white" to="#">
          Another link
        </Link>
      </Card.Body>
    </Card>
  </Col>
</Row>

<Row className="row">
  {cardsdata2.map((idx, cd2) => (
    <Col sm={12} md={12} lg={4} xl={4} key={cd2}>
      <Card className={`card-${idx.class}`}>
        <Card.Header className=" pb-0">
          <h5 className="card-title mb-0 pb-0">{idx.title}</h5>
        </Card.Header>
        <Card.Body className={`text-${idx.class}`}>
          {idx.text}
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  <Col sm={12} md={12} lg={4} xl={4}>
    <>
      {show ? (
        <Card className=" custom-card">
          <Card.Header className="  d-flex custom-card-header border-bottom-0 ">
            <h5 className="card-title">Basic Card</h5>
            <div className="card-options">
              <Link
                to="#"
                className="card-options-collapse"
                data-bs-toggle="card-collapse"
                onClick={() => {
                  first();
                }}
              >
                <i className="fe fe-chevron-up"></i>
              </Link>
              <span

                className="card-options-remove text-dark"
                data-bs-toggle="card-remove"
                onClick={() => setShow(false)}
              >
                <i className="fe fe-x"></i>
              </span>
            </div>
          </Card.Header>
          {isFirstCollapsed ? (
            <>
              <Card.Body>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere
              </Card.Body>
              <Card.Footer className="">This is Basic card footer</Card.Footer>
            </>
          ) : null}

        </Card>
      ) : null}
    </>
  </Col>
  <Col sm={12} md={12} lg={4} xl={4}>
    <>
      {remove ? (
        <Card className="custom-card">
          <Card.Header className="d-flex custom-card-header border-bottom-0 ">
            <h5 className="card-title">Basic Card</h5>
            <div className="card-options">
              <Link
                to="#"
                className="card-options-collapse"
                data-bs-toggle="card-collapse"
                onClick={() => {
                  firsts();
                }}
              >
                <i className="fe fe-chevron-up"></i>
              </Link>
              {values.map((v, idx) => (
                <Link
                  key={idx}
                  to="#"
                  className="card-options-fullscreen"
                  data-bs-toggle="card-fullscreen"
                  onClick={() => handleShow(v)}
                >
                  <i className="fe fe-maximize"></i>
                  <Modal show={shows} fullscreen={fullscreen}>
                    <Modal.Header>
                      <Modal.Title>Modal</Modal.Title>
                      <Button
                        variant="secondary"
                        onClick={() => setShows(false)}
                      >
                        x
                      </Button>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                  </Modal>
                </Link>
              ))}
              <Link
                to="#"
                className="card-options-remove"
                data-bs-toggle="card-remove"
                onClick={() => Setremove(false)}
              >
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          {isFirstCollapseds ? (
            <>
              <Card.Body>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere
              </Card.Body>
              <Card.Footer className="">This is Basic card footer</Card.Footer>
            </>
          ) : null}
        </Card>
      ) : null}
      <Modal show={shows} fullscreen={fullscreen}>
        <Modal.Header>
          <Modal.Title>Modal</Modal.Title>
          <Button variant="" onClick={() => setShows(false)}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  </Col>
  <Col sm={12} md={12} lg={4} xl={4}>
    <Card className=" custom-card">
      <Card.Header className=" d-flex custom-card-header border-bottom-0 ">
        <h5 className="card-title">Basic Card</h5>
        <div className="card-options">
          <Link to="#" className="btn btn-primary btn-sm">
            Action 1
          </Link>
          <Link to="#" className="btn btn-secondary btn-sm ms-2">
            Action 2
          </Link>
        </div>
      </Card.Header>
      <Card.Body>
        Et harum quidem rerum facilis est et expedita distinctio. Nam
        libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere
      </Card.Body>
      <Card.Footer className="">This is Basic card footer</Card.Footer>
    </Card>
  </Col>
</Row>

<Row className="row-sm">
  {cardsdata3.map((idx, cd3) => (
    <Col sm={12} md={12} lg={4} xl={4} key={cd3}>
      <Card className={idx.bg}>
        <Card.Body>
          <h5 className={idx.class}>{idx.title}</h5>
          <h6 className={`card-subtitle mb-2 text-${idx.textcolor}`}>{idx.subtitle}</h6>
          <p className={`card-text text-${idx.textcolor2}`}>
            {idx.text}
          </p>
          <Link to="#" className={`card-link text-${idx.color}`}>
            {idx.footer1}
          </Link>
          <Link to="#" className={`card-link text-${idx.color}`}>
            {idx.footer2}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ))}

</Row>

<Row className="row-sm">
  {cardsdata4.map((idx, cd4) => (
    <Col sm={12} md={12} lg={4} xl={4} key={cd4} className={idx.class}>
      <Card>
        <img
          alt=""
          className="img-fluid card-img-top"
          src={idx.src}
        />
        <Card.Body>
          <p className="card-text">
            {idx.text}
          </p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  {cardsdata5.map((idx, cd5) => (
    <Col sm={12} md={12} lg={4} xl={4} className={idx.class} key={cd5}>
      <Card>
        <Card.Body>
          <p className="card-text">
            {idx.text}
          </p>
        </Card.Body>
        <img
          alt=""
          className="img-fluid card-img-bottom bd-ts-0 bd-te-0"
          src={idx.src}
        />
      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  {cardsdata6.map((idx, cd6) => (
    <Col xl={3} sm={12} md={12} lg={6} key={cd6} className={idx.class}>
      <Card>
        <img
          alt=""
          className="br-5 img-fluid card-img-top"
          src={idx.src}
        />
        <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center br-5 ">
          <p className="tx-white tx-medium mg-b-15">{idx.title}</p>
          <p className="tx-white tx-13">
            {idx.text}
          </p>
          <p className="tx-13 mg-b-0">
            <Link className="tx-white" to={`${import.meta.env.BASE_URL}advancedui/blog/`}>
              Read more
            </Link>
          </p>
        </div>

      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  {cardsdata7.map((idx, cd7) => (
    <Col sm={12} md={12} lg={4} xl={4} className={idx.class} key={cd7}>
      <Card>
        <Card.Header className={`tx-medium bd-0 tx-white bg-${idx.color}`}>
          {idx.title}
        </Card.Header>
        <Card.Body>
          <p className="mg-b-0">
            {idx.text}
          </p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  <Col sm={12} md={12} lg={4} xl={4}>
    <Card>
      <Card.Body>
        <p className="mg-b-0">
          Some quick example text to build on the card title and make up
          the bulk of the card's content. Lorem ipsum dolor sit amet
          consictetur...
        </p>
      </Card.Body>
      <Card.Footer className=" bd-t">January, 20, 2017 4:30am</Card.Footer>
    </Card>
  </Col>
  <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
    <Card>
      <Card.Body>
        <p className="mg-b-0">
          Some quick example text to build on the card title and make up
          the bulk of the card's content. Lorem ipsum dolor sit amet
          consictetur...
        </p>
      </Card.Body>
      <Card.Footer className=" bd-t tx-center">
        <Link to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Read more</Link>
      </Card.Footer>
    </Card>
  </Col>
  <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
    <Card>
      <Card.Body>
        <p className="mg-b-0">
          Some quick example text to build on the card title and make up
          the bulk of the card's content. Lorem ipsum dolor sit amet
          consictetur...
        </p>
      </Card.Body>
      <Card.Footer className=" bd-t tx-right">
        Share <i className="icon ion-logo-facebook mg-l-5 mg-r-5"></i>{" "}
        <i className="icon ion-logo-twitter"></i>
      </Card.Footer>
    </Card>
  </Col>
</Row>

<Row className="row-sm">
  {cardsdata8.map((idx, cd8) => (
    <Col sm={12} md={12} lg={4} xl={4} key={cd8} className={idx.class}>
      <Card className={`card-body tx-white-8 bg-${idx.color} bd-0`}>
        {idx.text}
      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  <Col sm={12} md={12} lg={4} xl={4}>
    <Card>
      <Card.Body>
        <h5 className="card-title mb-3">Special title treatment</h5>
        <p className="card-text">
          At vero ducimus qui blanditiis leniti atque coret quas molestias
          excepturi sint similique sunt in culpa qui officia deserunt
          mollitia.
        </p>
        <Link to={`${import.meta.env.BASE_URL}advancedui/blog/`} className="btn btn-primary">
          See more
        </Link>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={12} md={12} lg={4} xl={4}>
    <Card>
      <Card.Body>
        <h5 className="card-title mb-3">Special title treatment</h5>
        <p className="card-text">
          At vero ducimus qui blanditiis leniti atque coret quas molestias
          excepturi sint similique sunt in culpa qui officia deserunt
          mollitia..
        </p>
        <Link to={`${import.meta.env.BASE_URL}advancedui/blog/`} className="btn btn-primary">
          See more
        </Link>
      </Card.Body>
    </Card>
  </Col>
</Row>

<Row className="row-sm">
  {cardsdata9.map((idx, cd9) => (
    <Col sm={12} md={12} lg={4} xl={4} key={cd9} >
      <Card className=" text-center card-img-top-1">
        <img
          className="card-img-top w-100"
          src={idx.src}
          alt=""
        />
        <Card.Body>
          <h4 className="card-title mb-3">{idx.title}</h4>
          <p className="card-text">
            {idx.text}
          </p>
          <Link className="btn btn-primary btn-block" to={`${import.meta.env.BASE_URL}advancedui/blog/`}>
            Read More
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

<Row className="row-sm">
  {cardsdata10.map((idx, cd10) => (
    <Col sm={12} md={12} lg={6} xl={4} key={cd10}>
      <Card className=" card-aside custom-card">
        <Link to="#"
          className="card-aside-column  cover-image"
        ></Link>
        <Card.Body>
          <h5 className=" card-title main-content-label tx-dark tx-medium mg-b-10">
            {idx.title}
          </h5>
          <div className="">
            {idx.text}
          </div>
          <div className="d-flex align-items-center pt-3 mt-auto">
            <div className="main-img-user avatar-sm me-3">
              <img
                src={idx.src}
                className="w-10 rounded-circle"
                alt="avatar-img"
              />
            </div>
            <div>
              <Link to="#" className="text-default">
                {idx.class1}
              </Link>
              <small className="d-block text-muted">{idx.class2}</small>
            </div>
            <div className="ms-auto remove-icons text-muted d-md-flex">
              <Link to="#"
                className="icon remove-heart d-none d-md-inline-block ms-3"
              >
                <i className="far fa-heart me-1"></i>
              </Link>
              <Link to="#"
                className="icon remove-thumb d-none d-md-inline-block ms-3"
              >
                <i className="far fa-thumbs-up"></i>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Fragment>
  );
}

Cards.propTypes = {};

Cards.defaultProps = {};

export default Cards;
