import { Fragment } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Graysetdata, Solidbackgroundsetdata, Solidgradientdata, Transparentwhitesetdata } from '../../../common/commondata';

const Background = () => {
  return (
    <Fragment>

      <Pageheader title="BACKGROUND" heading="Utilities" active="Background" />
      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Gray Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="example">
                <div className="gray-set d-flex flex-wrap">
                  {Graysetdata.map((idx) => (
                    <div className={`mb-2 bg-gray-${idx.class1} ht-50 lh-2 text-center me-2 p-3 br-5 tx-${idx.color}`} key={Math.random()}>
                      {idx.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNames</b>
                      </td>
                      <td>
                        <code>className="bg-gray-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Solid Background Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                {Solidbackgroundsetdata.map((idx) => (
                  <div className={`mb-2 bg-${idx.class} lh-2 text-center ht-50 me-2 p-3 tx-white  br-5`} key={Math.random()}>
                    {idx.text}
                  </div>
                ))}

              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNames</b>
                      </td>
                      <td>
                        <code>className="bg-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        primary | secondary | success | warning | danger | info
                        | indigo | purple | pink | teal | orange
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">
                Solid Gradient Background Set
              </h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                {Solidgradientdata.map((idx) => (
                  <div className={`mb-2 bg-${idx.class}-gradient   ht-50 lh-2 p-3 tx-white br-5 me-2`} key={Math.random()}>
                    {idx.text}
                  </div>
                ))}

              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNames</b>
                      </td>
                      <td>
                        <code>className="bg-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        primary-gradient | secondary-gradient | success-gradient
                        | warning-gradient | dange-gradientr | info-gradient |
                        purple-gradient | pink-gradient | teal-gradient
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Transparent White Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                {Transparentwhitesetdata.map((idx) => (
                  <div className="flex-1 pos-relative" key={Math.random()}>
                    <img
                      alt=""
                      className={`wd-100p ht-100p object-fit-cover  ${idx.class1}`}
                      src={idx.src}
                    />
                    <div className={`pos-absolute a-0 bg-white-${idx.class2}`}></div>
                  </div>
                ))}
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNames</b>
                      </td>
                      <td>
                        <code>className="bg-white-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Transparent Black Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                {Transparentwhitesetdata.map((idx) => (
                  <div className="flex-1 pos-relative" key={Math.random()}>
                    <img
                      alt=""
                      className={`wd-100p ht-100p object-fit-cover  ${idx.class1}`}
                      src={idx.src}
                    />
                    <div className={`pos-absolute a-0 bg-black-${idx.class2}`}></div>
                  </div>
                ))}
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNames</b>
                      </td>
                      <td>
                        <code>className="bg-black-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
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
Background.propTypes = {};

Background.defaultProps = {};

export default Background;
