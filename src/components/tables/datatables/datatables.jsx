import React, { Fragment } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { BasicTable,  Datatable, Savetable } from '../../../common/tablesfunctionaldata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const DataTables = () => {
  return(
  <Fragment>
    <div className="main-container container-fluid">

    <Pageheader title="DATA TABLES"  heading="Tables"   active="Data tables" />
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Basic DataTable</h6>
                <p className="text-muted card-sub-title">
                  Searching, ordering and paging goodness will be immediately
                  added to the table, as shown in this example.
                </p>
              </div>
              <div className="table-responsive">
                <BasicTable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Deleted Row DataTable
                </h6>
                <p className="text-muted card-sub-title">
                  Responsive is an extension for DataTables that resolves that
                  problem by optimising the table's layout for different screen
                  sizes through the dynamic insertion and removal of columns
                  from the table.
                </p>
              </div>
              <div className="table-responsive pos-relative">
                <Datatable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Deleted Row DataTable
                </h6>
                <p className="text-muted card-sub-title">
                  Responsive is an extension for DataTables that resolves that
                  problem by optimising the table's layout for different screen
                  sizes through the dynamic insertion and removal of columns
                  from the table.
                </p>
              </div>
              <div className="table-responsive  deleted-table">
                
                <Savetable/>
                
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  </Fragment>
);}

DataTables.propTypes = {};

DataTables.defaultProps = {};

export default DataTables;
