import  { Fragment , useState} from "react";
import {  Row, Col, Card, Button, Collapse, Form, Badge } from "react-bootstrap";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
import { Badgesdata, Badgesdata1, Borderbuttonsdata, Borderbuttonswithroundedbadgesdata, Buttonswithroundedbadgesdata, Buttonswithsquarebadgesdata, Linkbadgesdata, Linkbadgesdata1 } from "../../../common/commondata";

const Badges = () => {
  const [open, setOpen] = useState(false);
  const [Bordersqure, setBordersqure] = useState(false);
  const [Buttonrounded, setButtonrounded] = useState(false);
  const [Borderrounded, setBorderrounded] = useState(false);
  const [Linkbadges, setLinkbadges] = useState(false);
  const [Linkbadgesinbox, setLinkbadgesinbox] = useState(false);
  const [Simplebadgs, setSimplebadgs] = useState(false);
  const [Colorbadgs, setColorbadgs] = useState(false);
  const [Badges, setBadges] = useState(false);
  const [Badgespills, setBadgespills] = useState(false);
  return (
    <Fragment>

      <Pageheader title="BADGES"  heading="Elements"   active="Badge" /> 
      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Buttons with square Badges</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setOpen(!open)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are button badges.
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Buttonswithsquarebadgesdata.map((idx)=>(
                  <Button  variant={idx.color}  type="button"  className="btn btn- mt-1 mb-1 me-3" key={Math.random()}>
                    <span>Notifications</span>
                    <Badge bg="white" className="ms-1">{idx.class}</Badge>
                  </Button>
                  ))}
                </div>
              </div>
              <Collapse in={open} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
{Buttonswithsquarebadgesdata.map((idx)=>(
  <Button  variant={idx.color}  type="button"  className="btn btn- mt-1 mb-1 me-3" key={Math.random()}>
    <span>Notifications</span>
    <span className="badge  bg-white ms-1">{idx.class}</span>
  </Button>
  ))}`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">
                  Border buttons with square Badges
                </h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setBordersqure(!Bordersqure)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are Border buttons badges..
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Borderbuttonsdata.map((idx)=>(
                   <Button variant="" type="button" className={`btn btn-outline-${idx.color} mt-1 mb-1 me-3`} key={Math.random()}>
                    <span>Notifications</span>
                    <Badge bg={idx.color} className='ms-1'>{idx.class}</Badge>
                  </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Bordersqure} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Button
      variant=""
      type="button"
      className="btn btn-primary mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge  bg-white ms-1">2</span>
    </Button>
    <Button
      variant=""
      type="button"
      className="btn btn-secondary  mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge bg-white ms-1">1</span>
    </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Buttons with rounded Badges</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setButtonrounded(!Buttonrounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form></div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are button rounded badges...
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Buttonswithroundedbadgesdata.map((idx)=>(
                  <Button variant={idx.color} type="button" className="btn  mt-1 mb-1 me-3" key={Math.random()}>
                    <span>Notifications</span>
                    <Badge bg='white' className="badgerounded-pill ms-1">{idx.class}</Badge>
                  </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Buttonrounded} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
 {Buttonswithroundedbadgesdata.map((idx)=>(
  <Button variant={idx.color} type="button" className="btn  mt-1 mb-1 me-3" key={Math.random()}>
    <span>Notifications</span>
    <span className="badge bg-white rounded-pill ms-1">{idx.class}</span>
  </Button>
  ))}`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">
                  Border buttons with rounded Badges
                </h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setBorderrounded(!Borderrounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are border button rounded badges...
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Borderbuttonswithroundedbadgesdata.map((idx)=>(
                  <Button variant="" type="button" className={`btn btn-outline-${idx.color} mt-1 mb-1 me-3`} key={Math.random()}>
                    <span>Notifications</span>
                    <Badge bg={idx.color} className={`badge rounded-pill ms-1`}>{idx.class}</Badge>
                  </Button>
                  ))}
                
                </div>
              </div>
              <Collapse in={Borderrounded} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Button
      variant=""
      type="button"
      className="btn btn-outline-primary mt-1 mb-1 me-3"
    >
       <span>Notifications</span>
       <span className="badge  bg-primary rounded-pill ms-1">2</span>
    </Button>
    <Button
      variant=""
      type="button"
      className="btn btn-outline-success mt-1 mb-1 me-3"
    >
        <span>Notifications</span>
        <span className="badge bg-success rounded-pill ms-1">65</span>
    </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Link Badges</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setLinkbadges(!Linkbadges)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges can be used as part of links or buttons to provide a
                counter.
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Linkbadgesdata.map((idx)=>(
                  <Button variant=""  type="button"  className={`btn btn-${idx.color} mt-1 mb-1 me-3`} key={Math.random()}>
                    {idx.text} <Badge bg="light" className={`badge  ms-1 ${idx.class2}`}>{idx.class1}
                    <i className={idx.class}></i> </Badge></Button>
                  ))}
                </div>
              </div>
              <Collapse in={Linkbadges} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <Button
        variant=""
        type="button"
        className="btn btn-primary mt-1 mb-1 me-3"
     >
         Primary <span className="badge bg-light ms-1">22</span>
     </Button>
     <Button
        variant=""
        type="button"
        className="btn btn-success mt-1 mb-1 me-3"
     >
       Success <span className="badge bg-light  ms-1">New</span>
     </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Link Badges</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setLinkbadgesinbox(!Linkbadgesinbox)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges can be used as part of links or buttons to provide a
                counter.
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Linkbadgesdata1.map((idx)=>(
                  <Button variant=""  type="button"  className={`btn btn-${idx.color} position-relative  me-5  ${idx.class1}`} key={Math.random()}>
                   {idx.text}
                    <Badge bg={idx.class2} className={`position-absolute start-100 translate-middle badge rounded-pill`}>
                     {idx.badge}<span className="visually-hidden">unread messages</span>
                    </Badge>
                  </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Linkbadgesinbox} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <Button
        variant=""
        type="button"
        className="btn btn-primary position-relative  me-5"
     >
         Inbox
         <span className="position-absolute start-100 translate-middle badge rounded-pill bg-info">
            8<span className="visually-hidden">unread messages</span>
         </span>
     </Button>
     <Button
        variant=""
        type="button"
        className="btn btn-success position-relative  mb-2 mt-2  me-5"
     >
        Inbox
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-warning">
          82
          <span className="visually-hidden">unread messages</span>
        </span>
     </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={6}>
          <Card className="mg-b-20" id="badge">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Simple Badges</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setSimplebadgs(!Simplebadgs)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units...
              </p>
              <div className="text-wrap">
                <div className="example">

                  <h1>
                    Heading 1 <span className="badge bg-light">New</span>
                  </h1>
                  <h2>
                    Heading 2 <span className="badge bg-light">New</span>
                  </h2>
                  <h3>
                    Heading 3 <span className="badge bg-light ">New</span>
                  </h3>
                  <h4>
                    Heading 4 <span className="badge bg-light ">New</span>
                  </h4>
                  <h5>
                    Heading 5 <span className="badge bg-light ">New</span>
                  </h5>
                  <h6>
                    Heading 6 <span className="badge bg-light ">New</span>
                  </h6>

                </div>
              </div>
              <Collapse in={Simplebadgs} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <h1>
        Heading 1 <span className="badge bg-light">New</span>
     </h1>
     <h2>
        Heading 2 <span className="badge bg-light">New</span>
     </h2>
     <h3>
        Heading 3 <span className="badge bg-light ">New</span>
     </h3>
     <h4>
        Heading 4 <span className="badge bg-light ">New</span>
     </h4>
     <h5>
        Heading 5 <span className="badge bg-light ">New</span>
     </h5>
     <h6>
        Heading 6 <span className="badge bg-light ">New</span>
     </h6>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card className="mg-b-20" id="badge1">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Colored Badges</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setColorbadgs(!Colorbadgs)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units...
              </p>
              <div className="text-wrap">
                <div className="example">

                  <h1 className="text-primary">
                    Heading 1 <Badge bg="primary" className="badge ">New</Badge>
                  </h1>
                  <h2 className="text-danger">
                    Heading 2 <Badge bg="danger" className="badge">New</Badge>
                  </h2>
                  <h3 className="text-warning">
                    Heading 3 <Badge bg="warning" className="badge ">New</Badge>
                  </h3>
                  <h4 className="text-success">
                    Heading 4 <Badge bg="success" className="badge ">New</Badge>
                  </h4>
                  <h5 className="text-info">
                    Heading 5 <Badge bg="info" className="badge ">New</Badge>
                  </h5>
                  <h6 className="text-secondary">
                    Heading 6 <Badge bg="secondary" className="badge ">New</Badge>
                  </h6>
                </div>
              </div>
              <Collapse in={Colorbadgs} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
      <h1 className="text-primary">
          Heading 1 <span className="badge bg-primary">New</span>
      </h1>
      <h2 className="text-danger">
          Heading 2 <span className="badge bg-danger">New</span>
      </h2>
      <h3 className="text-warning">
           Heading 3 <span className="badge bg-warning">New</span>
      </h3>
      <h4 className="text-success">
          Heading 4 <span className="badge bg-success">New</span>
      </h4>
      <h5 className="text-info">
          Heading 5 <span className="badge bg-info">New</span>
      </h5>
      <h6 className="text-secondary">
          Heading 6 <span className="badge bg-secondary">New</span>
      </h6>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={12}>
          <Card className="mg-b-20" id="badge2">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">BADGES</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setBadges(!Badges)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units...
              </p>
              <div className="text-wrap">
                <div className="example">
                 {Badgesdata.map((idx)=>(
                  <Badge bg={idx.color} className='badge me-1 my-2'key={Math.random()}>{idx.text}</Badge>
                  ))}
                </div>
              </div>
                  <Collapse in={Badges} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="text-wrap">
  <div className="example">
      <span className="badge bg-primary me-1 my-2">Primary</span>
      <span className="badge bg-secondary me-1">Secondary</span>
      <span className="badge bg-success me-1">Success</span>
      <span className="badge bg-danger me-1">Danger</span>
      <span className="badge bg-warning me-1">Warning</span>
      <span className="badge bg-info me-1">Info</span>
      <span className="badge bg-light me-1">Light</span>
      <span className="badge bg-dark me-1">Dark</span>
  </div>
</div>
                    `}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={12}>
          <Card className="mg-b-20" id="badge3">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Pill Badges</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setBadgespills(!Badgespills)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="text-muted card-sub-title">
                Use the <code>.badge-pill</code> modifier className to make badges
                more rounded.
              </p>
              <div className="text-wrap">
                <div className="example">
                  {Badgesdata1.map((idx)=>(
                  <Badge bg={idx.color} className='badge badge-pill me-1 my-2' key={Math.random()}>
                    {idx.text}
                  </Badge>
                  ))}
                </div>
              </div>
                  <Collapse in={Badgespills} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="text-wrap">
  <div className="example">
      <span className="badge badge-pill bg-primary me-1 my-2">Primary</span>
      <span className="badge badge-pill bg-secondary me-1">Secondary</span>
      <span className="badge badge-pill bg-success me-1">Success</span>
      <span className="badge badge-pill bg-danger me-1">Danger</span>
      <span className="badge badge-pill bg-warning me-1">Warning</span>
      <span className="badge badge-pill bg-info me-1">Info</span>
      <span className="badge badge-pill bg-light me-1">Light</span>
      <span className="badge badge-pill bg-dark me-1">Dark</span>
  </div>
</div>
                    `}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
};

Badges.propTypes = {};

Badges.defaultProps = {};

export default Badges;
