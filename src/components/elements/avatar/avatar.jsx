import{ Fragment } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Avatarsizesdata, Initialsavatarsdata, Stackedavatarsinnumbersdata } from '../../../common/commondata';

const Avatar = () => {
  return(
  <Fragment>

    <Pageheader title="AVATARS"  heading="Elements"   active="Avatars" /> 
    <Row>
      <Col md={12} xl={6}>
        <Card className="custom-card" id="sizes">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatar Sizes</h6>
              <p className="text-muted card-sub-title">
                An avatar have different sizes.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group d-block d-sm-flex">
                  {Avatarsizesdata.map((idx)=>(
                  <div className={`main-img-user avatar-${idx.size}`} key={Math.random()}>
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={idx.src}
                    />
                  </div>
                  ))}
                 
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card className="custom-card" id="initials">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Initials Avatars</h6>
              <p className="text-muted card-sub-title">
                An avatar have a temporary names of user's their photos are not
                yet available.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group avatar-list flex-wrap pb-2">
                  {Initialsavatarsdata.map((idx)=>(
                  <div className={`avatar avatar-${idx.size} bg-${idx.color} ${idx.class} rounded-circle`} key={Math.random()}>
                  {idx.text}
                  </div>
                  ))}
                
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6}>
        <Card className="custom-card" id="shapes">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatar Shapes</h6>
              <p className="text-muted card-sub-title">
                An avatar have different shapes.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-md me-4">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={imagesData('female4')}
                    />
                  </div>
                  <div className="main-img-user avatar-md me-4">
                    <img
                      alt="avatar"
                      className="square"
                      src={imagesData('female5')}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="radius"
                      src={imagesData('female6')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Status Indicator</h6>
              <p className="text-muted card-sub-title">
                An avatar have a status indicator to indicate users
                availability.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-lg main-avatar online me-4">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={imagesData('female8')}
                    />
                  </div>
                  <div className="main-img-user avatar-lg main-avatar offline">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={imagesData('female8')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatars with numbers</h6>
              <p className="text-muted card-sub-title">
                Avatars that show number badges.
              </p>
            </div>
            <div className="text-wrap">
              <div className="additional-avatars">
                <div className="demo-avatar-group">
                  <div className="demo-avatar-group">
                    <div className="main-img-user1 avatar-sm me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={imagesData('female2')}
                      />
                      <span className="badge rounded-pill badge-primary number-badge">
                        2
                      </span>
                    </div>
                    <div className="main-img-user1 avatar-md me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={imagesData('female1')}
                      />
                      <span className="badge rounded-pill bg-secondary number-badge">
                        11
                      </span>
                    </div>
                    <div className="main-img-user1 avatar-lg">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={imagesData('female11')}
                      />
                      <span className="badge rounded-pill bg-success number-badge">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatars with icons</h6>
              <p className="text-muted card-sub-title">
                Avatars that show icon badges.
              </p>
            </div>
            <div className="text-wrap">
              <div className="additional-avatars">
                <div className="demo-avatar-group">
                  <div className="demo-avatar-group">
                    <div className="main-img-user3 avatar-sm me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={imagesData('female2')}
                      />
                      <span className="badge rounded-pill badge-primary icon-badgeavatar">
                        <i className="fe fe-plus"></i>
                      </span>
                    </div>
                    <div className="main-img-user3 avatar-md me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={imagesData('female1')}
                      />
                      <span className="badge rounded-pill bg-secondary icon-badgeavatar">
                        <i className="fe fe-edit"></i>
                      </span>
                    </div>
                    <div className="main-img-user3 avatar-lg">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={imagesData('female11')}
                      />
                      <span className="badge rounded-pill bg-success icon-badgeavatar">
                        <i className="fe fe-delete"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Stacked Avatars in Numbers</h6>
              <p className="text-muted card-sub-title">
                Group of avatars stacked together with number representation.
              </p>
            </div>
            <div className="text-wrap">
              <div className="avatar-list avatar-list-stacked">
                {Stackedavatarsinnumbersdata.map((idx)=>(
                <span className="avatar1 brround" key={Math.random()}>
                  <img
                    alt=""
                    className="rounded-circle"
                    src={idx.src}
                  />
                </span>
                ))}
                <span className="avatar1 brround">+8</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Stacked Avatars in Numbers</h6>
              <p className="text-muted card-sub-title">
                Avatars that show icon badges.
              </p>
            </div>
            <div className="text-wrap">
              <div className="avatar-list avatar-list-stacked">
              {Stackedavatarsinnumbersdata.map((idx)=>(
                <span className="avatar1 brround" key={Math.random()}>
                  <img
                    alt=""
                    className="rounded-circle"
                    src={idx.src}
                  />
                </span>
              ))}
                <span className="avatar1 brround">
                  <i className="fe fe-plus"></i>
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
   
  </Fragment>
);

};

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
