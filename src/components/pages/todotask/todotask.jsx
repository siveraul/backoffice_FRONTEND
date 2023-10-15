import  { Fragment, useState } from 'react';
import { Button,Card, Col, Row, Dropdown,OverlayTrigger,Tooltip, Form, Collapse, InputGroup, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Tododata } from '../../../common/commondata';

const Todotask = () => {
  const [expanded, setExpanded] = useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

    // for User search function
    const [allData, setAllData] = useState(Tododata);

    const userdata = [];
  
    const myfunction = (idx) => {
      let Data;
      for (Data of Tododata) {
        if (Data.text[0] == " ") {
          Data.text = Data.text.trim();
        }
        if (Data.text.toLowerCase().includes(idx.toLowerCase())) {
          if (Data.text.toLowerCase().startsWith(idx.toLowerCase())) {
            userdata.push(Data);
          }
        }
  
      }
      setAllData(userdata);
    };

  return(
  <Fragment>

    <Pageheader title="TODO TASK"  heading="Pages"   active="Todotask" />
    <Row className="row-sm">
   
      <Col md={12} xl={3} lg={12}>
        <Card>
          <div className="list-group list-group-transparent mb-0 mail-inbox pb-3">
            <div className="mt-4 mb-4 mx-4 text-center">
              <Link to="#" className="btn btn-primary d-grid">
                Add New Task
              </Link>
            </div>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-codepen fs-18 me-4 p-2 border-primary brround bg-primary-transparent text-primary"></i>{" "}
              All Tasks
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-alert-octagon fs-18 me-4 p-2 border-warning brround bg-warning-transparent text-warning"></i>{" "}
              Important <span className="ms-auto badge bg-danger">6</span>
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0  "
            >
              <i className="fe fe-star fs-18 me-4 p-2 border-secondary brround bg-secondary-transparent text-secondary"></i>{" "}
              Starred
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-briefcase fs-18 me-4 p-2 border-info brround bg-info-transparent text-info"></i>{" "}
              Spam
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-bell fs-18 me-4 p-2 border-success brround bg-success-transparent text-success"></i>{" "}
              Archive <span className="ms-auto badge bg-warning">4</span>
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-bottom-0 border-0 "
            >
              <i className="fe fe-trash-2 fs-18 me-4 p-2 border-danger brround bg-danger-transparent text-danger"></i>{" "}
              Trash
            </Link>
          </div>
        </Card>
      </Col>
      <Col xl={9} md={12}>
        <Row className=" row-sm">
          
          <Col lg={12}>
            <Card className=" mg-b-20">
              <Card.Body className=" d-flex p-3">
                <div className="main-content-label mb-0 mg-t-8">
                  User Today Tasks
                </div>
                <div className="ms-auto">
                  <Link
                    className="d-block tx-20"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="Add New User"
                    to="#"
                  >
                    <OverlayTrigger placement="top" overlay={<Tooltip>Add New User</Tooltip>}>
                    <i className="si si-plus text-muted" onClick={handleExpandClick}></i></OverlayTrigger>
                  </Link>
                  
                </div>
              </Card.Body>
              <Collapse in={expanded}>
									<div className='form-group mx-4'>
                  <InputGroup className="input-group mb-5 float-end">
            <Form.Control type="text"  placeholder="Search here..." onChange={(ele) => { myfunction(ele.target.value); }} />
            <Button type="button" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </InputGroup>
        
									</div>
      
								</Collapse>
            </Card>
          </Col>
          
          {allData.map((playerData) => (
        <Col xl={4} md={6} key={Math.random()}>
          <Card className=" mg-b-20">
            <Card.Body className=" p-0">
              <div className="todo-widget-header d-flex align-items-center pb-3 pd-20 border-bottom">
                <Dropdown >
                  <Dropdown.Toggle
                    as="a"
                    variant=""
                    className="drop-down-profile"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      alt=""
                      className="rounded-circle avatar avatar-md "
                      src={playerData.img}
                    />
                    <span className={`assigned-task bg-${playerData.color}`}>
                      {playerData.num}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu tx-13">
                    <div className="main-header-profile">
                      <div className="tx-16 h5 mg-b-0">Teri Dactyl</div>
                      <span>Web Designer</span>
                    </div>
                    <Dropdown.Item className="dropdown-item" href="#">
                      View Total Tasks
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      Completed Tasks
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      Settings
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="ms-auto">
                  <div className="card-options-task">
                    <OverlayTrigger
                      placement="top"
                      
                      overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <i
                      
                        className="p-2 border br-5 text-primary me-1 fe fe-folder-plus align-middle"
                      ></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      
                      overlay={<Tooltip>Move to spam</Tooltip>}
                    >
                      <i className="p-2 border br-5 text-primary me-1 fe fe-info align-middle"></i>
                    </OverlayTrigger>

                    <Dropdown as="span" className="me-1">
                      <Dropdown.Toggle
                        variant=""
                       
                        as="a"
                        className="p-2 border br-5 text-primary"
                      >
                        <i className="fe fe-more-vertical align-middle"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="tx-13 dropleft">
                        <Dropdown.Item href="#">Mark As Unread</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Mark As Important
                        </Dropdown.Item>
                        <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                        <Dropdown.Item href="#">Add Star</Dropdown.Item>
                        <Dropdown.Item href="#">Move to</Dropdown.Item>
                        <Dropdown.Item href="#">Mute</Dropdown.Item>
                        <Dropdown.Item href="#">Move to Trash</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="tx-12 text-muted">{playerData.time}</span>
                <span
                  className={`badge bg-${playerData.bg} me-1 my-2  text-${playerData.bgcolor} ms-auto float-end`}
                >
                  {playerData.bgtext}
                </span>
                <h5 className="tx-14 mb-0 mg-t-5 text-capitalize">
                  {playerData.text}
                </h5>
              </div>
              <div className="p-4 border-top">
                <span className="tx-12 text-muted">{playerData.time}</span>
                <h5 className="tx-14 mb-0 mg-t-5 text-capitalize">
                  {playerData.text2}
                </h5>
              </div>
            </Card.Body>
            <Card.Footer>
              <Link className="btn btn-primary" to="#" title="Assign Task">
                Assign
              </Link>
              <OverlayTrigger
                placement="top"
                
                overlay={<Tooltip>View Task</Tooltip>}
              >
                <Button
                  variant=""
                  className="btn btn-outline-primary ms-auto float-end"
                >
                  {" "}
                  View All
                </Button>
              </OverlayTrigger>
            </Card.Footer>
          </Card>
        </Col>
      ))}
        </Row>
      </Col>
     
    </Row>
   
  </Fragment>
);
};
Todotask.propTypes = {};

Todotask.defaultProps = {};

export default Todotask;
