import { Fragment } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Hidingelementsdata } from '../../../common/commondata';

const Display = () => {
  return(
  <Fragment>

    <Pageheader title="DISPLAY"  heading="Utilities"   active="Displays" />

    <Row>
      <Col md={12}xl={12}xs={12}sm={12}>
 
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Basic Display</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mb-0 mg-t-5">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-inline</code>
                    </td>
                    <td>Set an inline display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-inline-block</code>
                    </td>
                    <td>Set an inline-block display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Set a block display property of an element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12}xl={12}xs={12}sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Hiding Elements</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference mb-0 mg-t-5">
                <thead>
                  <tr>
                    <th className="wd-40p">ClassName</th>
                    <th className="wd-60p">Screen Size</th>
                  </tr>
                </thead>
                <tbody>
                  {Hidingelementsdata.map((idx)=>(
                  <tr key={Math.random()}>
                    <td>
                      <code>{idx.code}</code>
                    </td>
                    <td>{idx.text}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Fragment>
);
};
Display.propTypes = {};

Display.defaultProps = {};

export default Display;
