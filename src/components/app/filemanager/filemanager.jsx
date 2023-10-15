import React, { Fragment, useState } from 'react';
import {  Button, Card, Col, Dropdown, Form, InputGroup, Modal, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Filmanagerdata1, Filmanagerdata2, Filmanagerdata3 } from '../../../common/commondata';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Import FilePond styles

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const Filemanager = () =>{ 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [files, setFiles] = useState([]);
   // for User search function
   const [Data, setData] = useState(Filmanagerdata3);

   const userdata = [];
 
   const myfunction = (idx) => {
     let Data;
     for (Data of Filmanagerdata3) {
       if (Data.title[0] == " ") {
         Data.title = Data.title.trim();
       }
       if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
         if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
           userdata.push(Data);
         }
       }
 
     }
     setData(userdata);
   };
  return(
  <Fragment>

    <Pageheader title="FILE MANAGER" heading="Apps" active="File manager" />

    <Row>
      <Col lg={4} xl={3}>
        <Card>
          <Card.Body className="main-content-left main-content-left-mail card-body">
          <Button
                className="btn btn-primary btn-compose"
                id="btnCompose"
                data-bs-target="#Vertically"
                data-bs-toggle="modal"
                href="#"
                onClick={handleShow}
              >
                <i className="fa fa-plus me-2"></i> Create Folder
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FilePond
                    files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api"  name="files" /* sets the file input name, it's filepond by default */  labelIdle='Drag & Drop your file here or click '
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Add
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>

            <div className="main-mail-menu">
              <Nav className="main-nav-column" defaultActiveKey="Images">
              {Filmanagerdata1.map((idx) => (
                    <Nav.Item key={Math.random()}>
                      <Nav.Link className="thumb" eventKey={idx.key}>
                        <i className={`fe fe-${idx.icon}`}></i> {idx.title}{" "}
                      </Nav.Link></Nav.Item>
                  ))}
              </Nav>
              <Card className="custom-card mt-3 pb-0 mb-0">
                <Card.Header className="font-weight-bold">
                  <i className="fe fe-hard-drive me-2"></i>Storage
                </Card.Header>
                <Card.Body className="pt-0">
                  <div className="progress fileprogress mg-b-10">
                    <div
                      className="progress-bar progress-bar-xs wd-15p"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="text-muted font-weight-semibold tx-13 mb-1">
                    26.24 GB Used of 128GB
                  </div>
                  <div className="tx-13 text-primary font-weight-semibold">
                    Upgrade Storage
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={9} lg={8}>
        <Row>
          <div className="col-6">
            <div className="tx-18 mb-4">FIle Manager</div>
          </div>
          <div className="col-6 col-auto">
          <InputGroup className="input-group mb-2">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search folder....." onChange={(ele) => { myfunction(ele.target.value); }}
                />
                <span className="input-group-append">
                  <Button variant="" className="btn ripple btn-primary" type="button">
                    Search
                  </Button>
                </span>
              </InputGroup>
          </div>
        </Row>
        <div className="text-muted mb-2 tx-16">All Files</div>
        <Row>
        {Filmanagerdata2.map((idx) => (
              <Col xl={3} md={6} key={Math.random()}>
                <Card>
                  <Link to={`${import.meta.env.BASE_URL}app/filemanager1/`}>
                    <Card.Body>
                      <div className="tx-16 mb-1">
                        {idx.svg}
                        {idx.title}
                        <div className="float-end tx-13 text-muted mt-1">
                          {idx.text}
                        </div>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
        <div className="text-muted mb-2 tx-16">Folders</div>
        <Row>
        {Data.map((idx) => (
              <Col sm={6} md={4} xl={3} key={Math.random()}>
                <Card className="p-0 ">
                  <div className="d-flex align-items-center px-3 pt-3">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox2" value="option2" />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto optiondots">
                      <Dropdown.Toggle variant="" className="option-dots ">
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <i className="fe fe-download me-2"></i> Download
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Card.Body className="pt-0 text-center">
                    <div className="file-manger-icon">
                      <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                        <img
                          src={idx.src}
                          alt=""
                          className="br-7"
                        />
                      </Link>
                    </div>
                    <h6 className="mb-1 font-weight-semibold">{idx.title}</h6>
                    <span className="text-muted tx-11">{idx.text}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        <ul className="pagination float-end mb-4">
          <li className="page-item page-prev disabled">
            <Link className="page-link" to="#" tabIndex="-1">
              Prev
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item page-next">
            <Link className="page-link" to="#">
              Next
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  </Fragment>
);}

Filemanager.propTypes = {};

Filemanager.defaultProps = {};

export default Filemanager;
