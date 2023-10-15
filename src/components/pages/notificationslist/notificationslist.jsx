import React, { Fragment } from "react";
import { Badge, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagesData } from "../../../common/commonimages";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
const Notificationslist = () =>{ 
  return(
  <Fragment>
   <Pageheader title="NOTIFICATIONS LIST"  heading="Pages"   active="Notifications List" />


    <div className="container">
      <ul className="notification">
        <li>
          <div className="notification-time">
            <span className="date">Friday</span>
            <span className="time">02:31</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar online me-3 shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female6')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Emperio
                    </h5>
                    <p className="mb-0 tx-13 mb-0 text-muted">
                      Project assigned by the manager all{' '}
                      <Badge
                        bg=""
                        className=" badge-primary-transparent tx-12 font-weight-semibold text-primiary ms-1 me-1 mb-1"
                      >
                        files
                      </Badge>{' '}
                      and{' '}
                      <Badge
                        bg=""
                        className=" badge-primary-transparent text-primary tx-12 font-weight-semibold ms-1 me-1"
                      >
                        folders
                      </Badge>
                      were included
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        24, oct 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Monday</span>
            <span className="time">08:47</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar offline mb-3  me-3 my-auto shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female1')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Anesthesia
                    </h5>
                    <p className="mb-0 tx-13 mb-0 text-muted">
                      Admin and other team accepted your work request
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        30,sep 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Yesterday</span>
            <span className="time">18:43</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar online mb-3  me-3 my-auto shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female15')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Hughes
                    </h5>
                    <p className="mb-0 tx-13 mb-0 text-muted">
                      Temporary data will be{" "}
                      <Badge
                        bg=""
                        className=" badge-danger-transparent tx-12 font-weight-semibold me-1 ms-1"
                      >
                        deleted
                      </Badge>{" "}
                      once dedicated time complated
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        11,sep 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Today</span>
            <span className="time">03:18</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar online mb-3  me-3 my-auto shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female2')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Samantha Melon
                    </h5>
                    <p className="mb-0 tx-12 mb-0 text-muted">
                      Approved date for sanction of loan is verified{" "}
                      <i className="fe fe-check text-success"></i>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        18, sep 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Today</span>
            <span className="time">12:24</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar offline mb-3  me-3 my-auto shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female11')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Nexus Ronaldo
                    </h5>
                    <p className="mb-0 tx-13 mb-0 text-muted">
                      Social network accounts are at risk check your{" "}
                      <Badge
                        bg=""
                        className=" badge-success-transparent font-weight-semibold tx-12 ms-1 me-1"
                      >
                        login
                      </Badge>{" "}
                      details
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        18,sep 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Today</span>
            <span className="time">04:11</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar online mb-3  me-3 my-auto shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female13')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Hercules
                    </h5>
                    <p className="mb-0 tx-13 mb-0 text-muted">
                      Changed the password of gmail 4 hrs ago.{" "}
                      <Badge bg="" className=" badge-secondary">
                        Update
                      </Badge>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        18,sep 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">today</span>
            <span className="time">02:52</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-img-user avatar-md main-avatar online mb-3  me-3 my-auto shadow">
                <Link className="" to={`${import.meta.env.BASE_URL}pages/profile/`}>
                  <img
                    alt="avatar"
                    className="rounded-circle"
                    src={imagesData('female4')}
                  />
                </Link>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <div className="mt-0">
                    <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                      Milinda
                    </h5>
                    <p className="mb-0 tx-13 mb-0 text-muted">
                      Completed target date to change data heirarchy
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Badge bg="" className="float-end badge notification-badge">
                      <span className="tx-11 font-weight-semibold">
                        18,sep 2021
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-center mb-4">
        <Button className="btn btn-primary">Load more</Button>
      </div>
    </div>

  </Fragment>
);
}
Notificationslist.propTypes = {};

Notificationslist.defaultProps = {};

export default Notificationslist;
