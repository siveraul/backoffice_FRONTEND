import React, { Fragment } from 'react';
import { Row, Col, Card, OverlayTrigger, Button, ButtonGroup, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Aprovacoes = () => {
  return (
    <Fragment>
      <Pageheader title="GESTÃO DE CARGAS" heading="Estados de Cargas" active="Aprovacoes" />
      <Row>
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Header className=" custom-card-header">
              <h6 className="card-title mb-0">Aprovacoes</h6>
            </Card.Header>
            <Card.Body className="">
              <div className="vtimeline ">
                <div className='vtimeline-dot-start'></div>
                <div className="timeline-wrapper timeline-wrapper-primary">
                  <div className="timeline-badge success">
                    <i className="fe fe-box  text-muted me-1"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Autoridade de carga
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Pendente a validacao de Autoridade de Carga
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-clock text-warning me-1"></i>
                      <span className='text-warning'>Waiting...
                        <ButtonGroup size="sm" className='flex-nowrap' style={{ gap: '5px' }}>

                          <OverlayTrigger placement="top" overlay={<Tooltip >Verificar</Tooltip>}>
                            <Button>

                              <i className="fa fa-pen"></i>

                            </Button>
                          </OverlayTrigger>
                        </ButtonGroup>
                      </span>
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i>{' '}Waiting...
                      </span>
                    </div>

                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted timeline-wrapper-primary">
                  <div className="timeline-badge">
                    <i className="fe fe-box  text-muted me-1"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Agente de Terminal
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Pendente a recepcao do agente de terminal de carga
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-clock text-warning me-1"></i>
                      <span className='text-warning'>pendente</span>
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i>{' '}pendente
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper  timeline-wrapper-primary">
                  <div className="timeline-badge">
                    <i className="fe fe-box  text-muted me-1"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                      Balcao de Companhia Aerea
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                      Pendente validacao do balcao da companhia aeria 
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-clock  text-warning me-1"></i>
                      <span className='text-warning'>Pendente</span>
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i>{' '}pendente...
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted timeline-wrapper-primary">
                  <div className="timeline-badge">
                    <i className="fe fe-box  text-muted me-1"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Submissao de Comprovativo de Pagamento
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-clock text-warning me-1"></i>
                      <span className='text-warning'>
                        pendente...
                        
                      </span>
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i>{' '}Waiting...
                      </span>
                    </div>
                  </div>
                </div>
 
                <div className="timeline-wrapper  timeline-wrapper-primary">
                  <div className="timeline-badge">
                    <i className="fe fe-box  text-muted me-1"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                      Controle de carga
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                      Pendente validacao de controle de carga 
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-clock  text-warning me-1"></i>
                      <span className='text-warning'>Pendente</span>
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i>{' '}pendente...
                      </span>
                    </div>
                  </div>
                </div>
                <div className='vtimeline-dot-end'></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

Aprovacoes.propTypes = {};

Aprovacoes.defaultProps = {};

export default Aprovacoes;
