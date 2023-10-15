import { Fragment } from 'react';
import {  Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Widgetsdata1, Widgetsdata2, Widgetsdata3, Widgetsdata4, Widgetsdata5 } from '../../../common/commondata';

const Widgetnotification = () =>{ 
  return(
  <Fragment>

    <Pageheader title="WIDGET NOTIFICATION"  heading="Apps"   active="Widget notification" /> 

    <Row className="row-sm">
      {Widgetsdata1.map((idx)=>(
      <Col lg={6} md={12} xl={3} key={Math.random()}>
       <Card className="bd-0 mg-b-20">
          <Card.Body className={`text-${idx.class1} bg-${idx.class1}-transparent br-5 bd bd-${idx.class1}`}>
            <div className="main-error-wrapper">
              <i className={`si si-${idx.class2} mg-b-20 tx-50`}></i>
              <h4 className="mg-b-20">{idx.title}</h4>
              <Link className={`btn btn-outline-${idx.class1} btn-sm`} to="#">
               {idx.text}
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
      ))}
     </Row>
   
    <Row className="row-sm">
      {Widgetsdata2.map((idx)=>(      
      <Col lg={6} md={12} xl={3} key={Math.random()}>
       
        <Card className="bd-0 mg-b-20  alert p-0">
          <Card.Header className={`text-${idx.class} font-weight-bold pt-2 d-flex align-items-center`}>
            <i className={`si si-${idx.class1} tx-13 me-1`}></i> {idx.title}
            <Button
              variant=""
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
              type="button"
            ></Button>
          </Card.Header>
          <Card.Body className={`text-${idx.class} bg-${idx.class}-transparent`}>
            <strong>{idx.text1}</strong> {idx.text2}
          </Card.Body>
        </Card>     
      </Col>
      ))}
    </Row>

    <Row className="row-sm">
      {Widgetsdata3.map((idx)=>(
      <Col lg={6} md={12} xl={3} key={Math.random()}>
      <Card className="bd-0 mg-b-20">
          <Card.Body className={`bd bd-${idx.class} text-center rounded`}>
            <div className={`${idx.class}-widget`}>
              <i className={`si si-${idx.class1} mg-b-20 tx-50 text-${idx.class}`}></i>
              <h3 className={`mt-3 text-${idx.class}`}>{idx.title}</h3>
              <p className="mt-3 mb-0">
                {idx.text}
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    
    <Row className="row-sm">
    {Widgetsdata3.map((idx)=>(
      <Col lg={6} md={12} xl={3} key={Math.random()}>
       
        <Card className="bd-0 mg-b-20">
          <Card.Body className={`bd bd-${idx.class} text-center rounded`}>
            <div className={`${idx.class}-widget`}>
              <h3 className={`text-${idx.class}`}>{idx.title}</h3>
              <p className="mt-3 mb-0">
               {idx.text}
              </p>
            </div>
          </Card.Body>
        </Card>
      
      </Col>
        ))}
     
    </Row>
    <Row className="row-sm">
      {Widgetsdata4.map((idx)=>(
      <Col lg={6} md={12} xl={3} key={Math.random()}>
       <Card className={`bd-0 mg-b-20 bg-${idx.class1}`}>
          <Card.Body className={`text-${idx.class2}`}>
            <div className="main-error-wrapper">
              <i className={`si si-${idx.class} mg-b-20 tx-50`}></i>
              <h4 className="mg-b-0">{idx.title}</h4>
            </div>
          </Card.Body>
        </Card>
      </Col>
      ))}
      </Row>
   
    <Row className="row-sm">
      {Widgetsdata5.map((idx)=>(
      <Col xl={4} md={6} lg={6} key={Math.random()}>
        <Card className="mg-b-20 text-center">
          <Card.Body className="h-100">
            <img
              src={idx.src}
              alt=""
              className="wd-35p"
            />
            <h5 className="mg-b-10 mg-t-15 tx-18">{idx.title}</h5>
            <Link to="#" className="text-muted">
              {idx.text}
            </Link>
          </Card.Body>
        </Card>
      </Col>
      ))}
    
    </Row>
    
  </Fragment>
);
};
Widgetnotification.propTypes = {};

Widgetnotification.defaultProps = {};

export default Widgetnotification;
