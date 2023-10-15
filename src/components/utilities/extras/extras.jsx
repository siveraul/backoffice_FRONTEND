import { Fragment } from 'react';
import {  Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Opacitydata } from '../../../common/commondata';

const Extras = () => {
  return(
  <Fragment>

    <Pageheader title="EXTRAS"  heading="Utilities"   active="Extras" />
    <Row>
      <Col md={12}xl={12}xs={12}sm={12}>
  
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Opacity</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="example">
              <div className="gray-set d-flex  flex-wrap">
                {Opacitydata.map((idx)=>(
                <div className={`flex-1 bg-primary p-3 ht-100 p-3  text-white op-${idx.class}`} key={Math.random()}>
                  <div className="text-dark op-0">{idx.text1}</div>
                  {idx.text2}
                </div>
                ))}
                
              </div>
            </div>
            <div className="table-responsive mg-t-20 mb-0">
              <Table className="table main-table-reference text-nowrap mg-t-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNames</b>
                    </td>
                    <td>
                      <code>.op-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive mg-t-20 mb-0">
              <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNames</b>
                    </td>
                    <td>
                      <code>.op-[breakpoint]-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
                      </p>
                    </td>
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
            <h3 className="card-title  mg-b-10">Shadow</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive mg-t-20 mb-0">
              <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNames</b>
                    </td>
                    <td>
                      <code>.shadow-base</code>
                    </td>
                    <td>
                      <code>.shadow-none</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>Add shadow to any box element.</td>
                    <td>Remove shadow to any box element.</td>
                  </tr>
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
Extras.propTypes = {};

Extras.defaultProps = {};

export default Extras;
