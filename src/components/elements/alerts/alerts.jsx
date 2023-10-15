import React, { Fragment, useState } from 'react';
import {  Card, Col, Form, Collapse, Row, Alert, Button } from "react-bootstrap";
import { Alertdatacontentdata, Alertdatalinkdata, initialListdata, initialListdismissingdata, initialListiconsdata } from '../../../common/commondata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
const Alerts = () => {
  const [open, setOpen] = useState(false);
  const [alertData, setalertData] = useState(initialListdata);
  const [Outline, setOutline] = useState(false);
  const [outline, setoutline] = useState(initialListdata);
  const [Solid, setSolid] = useState(false);
  const [solid, setsolid] = useState(initialListdata);
  const [Dismissing, setDismissing] = useState(false);
  const [Icon, setIcon] = useState(false);
  const [Link, setLink] = useState(false);
  const [DismissingIcon, setDismissingIcon] = useState(false);
  const [Additional, setAdditional] = useState(false);

const [Alertdismissing, setAlertdismissing] = useState(initialListdismissingdata);
const [iconsdismissing, seticonsdismissing] = useState(initialListiconsdata);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }
  let handleRemoveoutline = (id) => {
    const newList = outline.filter((list) => list.id !== id);
    setoutline(newList);
  }
  let handleRemovesolid = (id) => {
    const newList = solid.filter((list) => list.id !== id);
    setsolid(newList);
  }
  let handleRemovedismissing = (id) => {
    const newList = Alertdismissing.filter((list) => list.id !== id);
    setAlertdismissing(newList);
  }
  let handleRemoveicons = (id) => {
    const newList = iconsdismissing.filter((list) => list.id !== id);
    seticonsdismissing(newList);
  }
  return (
  
   <Fragment>

<Pageheader title="ALERTS"  heading="Elements"   active="Alerts" /> 

<Row className='alerts'>
  <Col lg={6} md={12} sm={12}>
    <Card id="basic-alert">
      <Card.Body>
        <div>
          <div className="d-flex">
            <h6 className="card-title mb-1">Basic Alerts</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setOpen(!open)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Use one of the four required contextual classNamees.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
            <Fragment>
              {alertData.map((item, k) => (
                <Fragment key={k}>
                  <Alert
                    className="alert alert-dismissible fade show "
                    variant={item.variant}
                  >
                    {" "}
                    <strong>{item.show}</strong> {item.text}
                    <Button
                      variant=""
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="btn-close btn"
                    >
                      <span aria-hidden="true">×</span>
                    </Button>
                  </Alert>
                </Fragment>
              ))}

            </Fragment>
          </div>
        </div>
        <Collapse in={open} className="">
          <pre>
            <code>
              {`

<Fragment>
{list.map((item, k) => (
  <Fragment key={k}>
    <Alert
      className="alert alert-dismissible fade show "
      variant={item.variant}
    >
      {" "}
      <strong>{item.show}</strong> {item.text}
      <Button
        variant=""
        type="button"
        onClick={() => handleRemove(item.id)}
        className="btn-close btn"
      >
        <span aria-hidden="true">×</span>
      </Button>
    </Alert>
  </Fragment>
          `}
            </code>
          </pre>
        </Collapse>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={6} md={12} sm={12}>
    <Card id="outline-alert">
      <Card.Body>
        <div>
          <div className="d-flex">
            <h6 className="card-title mb-1">Outline Alerts</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setOutline(!Outline)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Use one of the four required contextual classNamees.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
            <Fragment>
              {outline.map((item, k) => (
                <Fragment key={k}>
                  <Alert
                    variant=""
                    className={`alert fade show alert-dismissible alert-outline-${item.variant}`}
                  >
                    {" "}
                    <strong>{item.show}</strong> {item.text}
                    <Button
                      variant=""
                      type="button"
                      onClick={() => handleRemoveoutline(item.id)}
                      className="btn-close"
                    >
                      <span aria-hidden="true">×</span>
                    </Button>
                  </Alert>
                </Fragment>
              ))}

            </Fragment>
          </div>
        </div>
        <Collapse in={Outline} className="">
<pre>
<code>{`

<Fragment>
{list.map((item, k) => (
  <Fragment key={k}>
    <Alert
      variant=""
      className={alert fade show alert-dismissible alert-outline-{item.variant}}
    >
      {" "}
      <strong>{item.show}</strong> {item.text}
      <Button
        variant=""
        type="button"
        onClick={() => handleRemove(item.id)}
        className="btn-close"
      >
        <span aria-hidden="true">×</span>
      </Button>
    </Alert>
  </Fragment>

`}</code>
                </pre>
        </Collapse>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={6} md={12} sm={12}>
    <Card id="solid-alert">
      <Card.Body>
        <div>
          <div className="d-flex">
            <h6 className="card-title mb-1">Solid Colored Alerts</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setSolid(!Solid)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Use one of the four required contextual classNamees.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
            <Fragment>
              {solid.map((item, k) => (
                <Fragment key={k}>
                  <Alert
                    variant=""
                    className={`alert fade show alert-dismissible alert-solid-${item.variant}`}
                  >
                    {" "}
                    <strong>{item.show}</strong> {item.text}
                    <Button
                      variant=""
                      type="button"
                      onClick={() => handleRemovesolid(item.id)}
                      className="btn-close"
                    >
                      <span aria-hidden="true">×</span>
                    </Button>
                  </Alert>
                </Fragment>
              ))}

            </Fragment>
          </div>
        </div>
        <Collapse in={Solid} className="">
<pre>
<code>{`
export const SolidColored = () => {
const [list, setList] = useState(initialList);
function handleRemove(id) {
const newList = list.filter((list) => list.id !== id);
setList(newList);
}
return (
<Fragment>
 {list.map((item, k) => (
   <Fragment key={k}>
     <Alert
       variant=""
       className={alert fade show alert-dismissible alert-solid-{item.variant}}
     >
       {" "}
       <strong>{item.show}</strong> {item.text}
       <Button
         variant=""
         type="button"
         onClick={() => handleRemove(item.id)}
         className="btn-close"
       >
         <span aria-hidden="true">×</span>
       </Button>
     </Alert>
   </Fragment>
 ))}
</Fragment>
);
};
`}</code>
</pre>
        </Collapse>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={6} md={12} sm={12}>
    <div className="card custom-card" id="dismiss-alerts">
      <Card.Body>
        <div>
          <div className="d-flex">
            <h6 className="card-title mb-1">Dismissing Alerts</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setDismissing(!Dismissing)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Using the alert JavaScript plugin, it’s possible to dismiss any
            alert inline.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
          <Fragment>
{Alertdismissing.map((playerData) => (
  <Fragment key={playerData.id}>
    <Alert
      variant=""
      className={`alert fade show alert-dismissible alert-${playerData.variant}`}
    >
      {" "}
      <strong>{playerData.show}</strong> {playerData.text}
      <Button
        variant=""
        type="button"
        onClick={() => handleRemovedismissing(playerData.id)}
        className="btn-close"
      >
        <span aria-hidden="true">×</span>
      </Button>
    </Alert>
  </Fragment>
))}

</Fragment>
          </div>
        </div>
        <Collapse in={Dismissing} className="">
           <pre>
                  <code>{`

<Fragment>

{Alertdismissing.map((playerData) => (
  <Fragment key={playerData.id}>
    <Alert
      variant=""
      className={alert fade show alert-dismissible alert-{playerData.variant}}
    >
      {" "}
      <strong>{playerData.show}</strong> {playerData.text}
      <Button
        variant=""
        type="button"
        onClick={() => handleRemove(playerData.id)}
        className="btn-close"
      >
        <span aria-hidden="true">×</span>
      </Button>
    </Alert>
  </Fragment>

`}</code>
                </pre>
              
        </Collapse>
      </Card.Body>
    </div>
  </Col>
  <Col lg={6} md={12} sm={12}>
    <div className="card custom-card" id="icon-alerts">
      <Card.Body>
        <div>
          <div className='d-flex'>
            <h6 className="card-title mb-1">Alert With Icon</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setIcon(!Icon)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Alerts can also contain additional HTML elements like headings,
            paragraphs and dividers.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
          <Fragment>
{initialListiconsdata.map((playerData, k) => (
  <Fragment key={k}>
    <Alert
      variant=""
      className={`alert fade show alert-dismissible alert-${playerData.variant}`}
    >
      {" "}
      <span className="alert-inner--icon">
        <i className={`${playerData.icons} `}></i>
      </span>{" "}
      <span className="alert-inner--text">
        <strong>{playerData.show}</strong> {playerData.text}
      </span>
    </Alert>
  </Fragment>
))}

</Fragment>
          </div>
        </div>
        <Collapse in={Icon} className="">
                <pre>
                  <code>{`

<Fragment>
{initialListicons.map((playerData, k) => (
  <Fragment key={k}>
    <Alert
      variant=""
      className={alert fade show alert-dismissible alert-{playerData.variant}}
    >
            {" "}
            <span className="alert-inner--icon">
              <i className={{playerData.icons}}></i>
            </span>{" "}
            <span className="alert-inner--text">
              <strong>{playerData.show}</strong> {playerData.text}
            </span>
          </Alert>
        </Fragment>
))}
</Fragment>
`}</code>
                </pre>
              
        </Collapse>
      </Card.Body>
    </div>
  </Col>
  <Col lg={6} md={12} sm={12}>
    <div className="card custom-card" id="icon-dismissalerts">
      <Card.Body>
        <div>
          <div className="d-flex">
            <h6 className="card-title mb-1">Alert With Icon Dismissing</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setDismissingIcon(!DismissingIcon)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Alerts can also contain additional HTML elements like headings,
            paragraphs and dividers.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
          <Fragment>

{iconsdismissing.map((playerData) => (
<Fragment key={playerData.id}>
<Alert
variant=""
className={`alert fade show alert-dismissible alert-${playerData.variant}`}
>
{" "}
<span className="alert-inner--icon">
  <i className={`${playerData.icons} `}></i>
</span>{" "}
<span className="alert-inner--text">
  <strong>{playerData.show}</strong> {playerData.text}
</span>
<Button
  variant=""
  type="button"
  onClick={() => handleRemoveicons(playerData.id)}
  className="btn-close"
>
  <span aria-hidden="true">×</span>
</Button>
</Alert>
</Fragment>
))}

</Fragment>
          </div>
        </div>
        <Collapse in={DismissingIcon} className="">
            
                <pre>
                  <code>{`
export const Alertsicons = () => {
const [open, setOpen] = useState(false);
return (
<Fragment>
{initialListicons.map((playerData, k) => (
  <Fragment key={k}>
    <Alert
      variant=""
      className={alert fade show alert-dismissible alert-{playerData.variant}}
    >
            {" "}
            <span className="alert-inner--icon">
              <i className={{playerData.icons}}></i>
            </span>{" "}
            <span className="alert-inner--text">
              <strong>{playerData.show}</strong> {playerData.text}
            </span>
          </Alert>
        </Fragment>
))}
</Fragment>
`}</code>
                </pre>
             
        </Collapse>
      </Card.Body>
    </div>
  </Col>
  <Col lg={12} md={12} sm={12}>
    <Card className=" custom-card" id="link-alerts">
      <Card.Body>
        <div>
          <div className='d-flex'>
            <h6 className="card-title mb-1">Link color Alerts</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setLink(!Link)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Use the <code className="highlighter-rouge">.alert-link</code>{" "}
            utility className to quickly provide matching colored links
            within any alert.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
          <Fragment>

{Alertdatalinkdata.map((playerData, k) => (
<Alert key={k} variant="" className={`alert alert-${playerData.color}`}>
This is a {playerData.color} alert with{" "}
<Alert.Link className="alert-link" href="#">
an example link
</Alert.Link>
. Give it a click if you like.
</Alert>
))}

</Fragment>
          </div>
        </div>
        <Collapse in={Link} className="">
      <pre>
                  <code>{`

<Fragment>
{Alertdatalink.map((playerData, k) => (
  <Alert key={k} variant="" className={alert alert-{playerData.color}}>
    This is a {playerData.color} alert with{" "}
    <Alert.Link className="alert-link" href="#">
      an example link
    </Alert.Link>
    . Give it a click if you like.
  </Alert>
))}
<Fragment>
`}</code>
                </pre>
             
        </Collapse>
      </Card.Body>
    </Card>
  </Col>
  <Col lg={12} md={12} sm={12}>
    <div className="card custom-card" id="additional-alerts">
      <Card.Body>
        <div>
          <div className='d-flex'>
            <h6 className="card-title mb-1">Additional Content Alert</h6>
            <Form.Check
              label="Show Code"
              type="switch"
              onClick={() => setAdditional(!Additional)}
              className="showcode d-flex ms-auto "
            />
          </div>
          <p className="text-muted card-sub-title">
            Alerts can also contain additional HTML elements like headings,
            paragraphs and dividers.
          </p>
        </div>
        <div className="text-wrap">
          <div className="example">
          <Fragment>
{Alertdatacontentdata.map((playerData, k) => (
  <Alert
    key={k}
    className={`alert mb-2 alert-${playerData.bg}`}
    variant=""
  >
    <Alert.Heading>
      <h4 className="alert-heading">
        <i className={`${playerData.fe} me-2 tx-20`}></i>
        {playerData.text}
      </h4>
    </Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This
      example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things
      nice and tidy.
    </p>
  </Alert>
))}

</Fragment>
          </div>
        </div>
        <Collapse in={Additional} className="">
                <pre>
                  <code>{`

<Fragment>
{Alertdatacontent.map((playerData, k) => (
  <Alert
    key={k}
    className={alert mb-2 alert-{playerData.bg}}
            variant=""
  >
            <Alert.Heading>
              <h4 className="alert-heading">
                <i className={{playerData.fe} me-2 tx-20}></i>
                {playerData.text}
              </h4>
            </Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things
              nice and tidy.
            </p>
          </Alert>
))}
</Fragment>
`}</code>
                </pre>
             
        </Collapse>
      </Card.Body>
    </div>
  </Col>
</Row>
</Fragment>

  );
}
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
