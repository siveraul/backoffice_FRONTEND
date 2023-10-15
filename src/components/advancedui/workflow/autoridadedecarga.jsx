import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Table, Card } from "react-bootstrap";
import validator from "validator";
import { Link } from "react-router-dom";
import { FilePond, registerPlugin } from 'react-filepond'
import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


function Button({ visible, ...props }) {
  return (

    <button
      className={visible ? "btn btn-primary " : "invisible"}
      {...props}
    />

  );
}


const Wizardhor = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div className="row border">
      <nav className=" steps col-sm-3 bordera">
        {steps.map((step, index) => (
          <Button
            key={step.props.number}
            onClick={(e) => {
              e.preventDefault();
            }}
            /* onClick={() => props.onChange(index)} */
            className={getClsNavBtns(index === currentIndex)}

          >
            <span className="number me-2">{step.props.number}</span>
            <i>{step.props.title}</i>
          </Button>
        ))}
      </nav>

      {steps[currentIndex]}
      <div className="col-sm-3 bordera"></div>
      <div className=" p-3 d-flex justify-content-between col-sm-9 ">
        <Buttons
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Buttons>
        <Buttons
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Validar
        </Buttons>
      </div>
    </div>
  );
};
const Steps = ({ children }) => children;

function getClsNavBtns(active) {
  return "btn horwizard" + (active ? " active" : "");
}
function Buttons({ visible, ...props }) {
  return (
    <button className={visible ? "btn btn-primary " : "invisible"} {...props} />
  );
}
const Drop = () => {
  //filepond
  const [files, setFiles] = useState([]);

  const [selectedFiles] = useState([]);
  return (
    <React.Fragment>
      <FilePond
        files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <div className="list-unstyled mb-0" id="file-previews">
        {selectedFiles.map((f, i) => {
          return (
            <Card
              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
              key={i + "-file"}
            >
              <div className="p-2">
                <Row className="align-items-center">
                  <Col className="col-auto">
                    <img
                      data-dz-thumbnail=""
                      height="80"
                      className="avatar-sm rounded bg-light"
                      alt={f.name}
                      src={f.preview}
                    />
                  </Col>
                  <Col>
                    <Link to="#" className="text-muted font-weight-bold">
                      {f.name}
                    </Link>
                    <p className="mb-0">
                      <strong>{f.formattedSize}</strong>
                    </p>
                  </Col>
                </Row>
              </div>
            </Card>
          );
        })}
      </div>
    </React.Fragment>

  );
}

export class Vertical extends React.Component {

  state = { step: 0 };

  handleStep = (step) => {
    this.setState({ step });
  };

  render() {
    const item = this.props.userData;
    
    return (
      <Wizardhor step={this.state.step} /* onChange={this.handleStep} */>
        <Steps title="Autoridade de carga" number="1">
          <section className="card-body col-sm-9">
            <Col>
              <div style={{ border: '1px solid grey', padding: '15px', borderRadius: '20px' }}>
                <Form.Label className="form-label" style={{ textDecorationLine: 'underline' }}>INFORMAÇÕES DA CARGA</Form.Label>
                <div style={{ width: '100%', display: "flex", flexDirection: 'row', gap: '20px' }}>
                  <Form.Group className="control-group form-group">
                    <Form.Label className="form-label">Nome</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.ca_nome_carga}

                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group" style={{ width: "350px" }}>
                    <Form.Label className="form-label">Descricao</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                  value={item.ca_descricao_carga}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group">
                    <Form.Label className="form-label">Quantidade</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      required
                      placeholder=""
                value={item.ca_quantidade}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group mb-2">
                    <Form.Label className="form-label">Peso</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.ca_Peso_carga}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group mb-2" >
                    <Form.Label className="form-label">Tipo</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.tc_nome}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: '100%', display: "flex", flexDirection: 'row', gap: '20px' }}>
                  <Form.Group className="control-group form-group mb-2" style={{ width: '50%' }}>
                    <Form.Label className="form-label">Aeroporto de Origem {" "}</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.Nnome_aeroporto_origem}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group mb-2" style={{ width: '50%' }}>
                    <Form.Label className="form-label">Aeroporto de Destino {" "}</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.nome_aeroporto_destino}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="mt-2" style={{ border: '1px solid grey', padding: '15px', borderRadius: '20px' }}>

                <Form.Label className="form-label" style={{ textDecorationLine: 'underline' }}>INFORMAÇÕES DO RECEPTOR </Form.Label>

                <div style={{ width: '100%', display: "flex", flexDirection: 'row', gap: '20px' }}>
                  <Form.Group className="control-group form-group">
                    <Form.Label className="form-label">Nome</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.ca_receptor_nome}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group" style={{ width: "350px" }}>
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email Address"
                      value={item.ca_receptor_email}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group">
                    <Form.Label className="form-label">Contacto</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      required
                      placeholder="Number"
                      value={item.ca_receptor_contacto}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group mb-2">
                    <Form.Label className="form-label">Numero Documento</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder="Address"
                      value={item.ca_receptor_numero_documento}
                    />
                  </Form.Group>
                  
                </div>
                <Form.Group className="control-group form-group mb-2" >
                    <Form.Label className="form-label">Endereco</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder="Address"
                      value={item.ca_receptor_localizacao}
                    />
                  </Form.Group>
              </div>

              <div className="mt-2" style={{ border: '1px solid grey', padding: '15px', borderRadius: '20px' }}>
                <Form.Label className="form-label" style={{ textDecorationLine: 'underline' }}>INFORMAÇÕES DO CLIENTE </Form.Label>

                <div style={{ width: '100%', display: "flex", flexDirection: 'row', gap: '20px' }}>
                  <Form.Group className="control-group form-group">
                    <Form.Label className="form-label">Nome</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder=""
                      value={item.c_nome}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group" style={{ width: "350px" }}>
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email Address"
                      value={item.c_email}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group">
                    <Form.Label className="form-label">Contacto</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      required
                      placeholder="Number"
                      value={item.c_contacto}
                    />
                  </Form.Group>
                  <Form.Group className="control-group form-group mb-2">
                    <Form.Label className="form-label">Numero Documento</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder="Address"
                      value={item.c_numero_documento}
                    />
                  </Form.Group>
                  
                </div>
                <Form.Group className="control-group form-group mb-2" >
                    <Form.Label className="form-label">Endereco</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      required
                      placeholder="Address"
                      value={item.c_endereco}
                    />
                  </Form.Group>
              </div>

            </Col>
  
            {/*  <div className="mb-2 drop">
              <Drop />
            </div> */}

          </section>
        </Steps>

        <Steps title="Agente de Terminal de Carga" number="2" >
          {/* <section className="card-body col-sm-9">
              <div className="table-responsive mg-t-20">
                <Table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td className="text-end">$792.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span>Totals</span>
                      </td>
                      <td className="text-end text-muted">
                        <span>$792.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Order Total</span>
                      </td>
                      <td>
                        <h2 className="price text-end mb-0">$792.00</h2>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </section> */}
        </Steps>
        <Steps title="Balcão de Companhia Aérea" number="3">
          <section className="card-body col-sm-9">
            <Form.Group className="form-group">
              <Form.Label className="form-label">CardHolder Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="name12"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Card number</Form.Label>
              <InputGroup className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-append">
                  <Button
                    variant=""
                    className="btn btn-secondary"
                    type="button"
                  >
                    <i className="fab fa-cc-visa"></i> &nbsp;{" "}
                    <i className="fab fa-cc-amex"></i> &nbsp;
                    <i className="fab fa-cc-mastercard"></i>
                  </Button>
                </span>
              </InputGroup>
            </Form.Group>
            <Row>
              <Col sm={8}>
                <Form.Group className="form-group mb-sm-0">
                  <Form.Label className="form-label">Expiration</Form.Label>
                  <InputGroup className="input-group">
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className="form-group mb-0">
                  <Form.Label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </section>
        </Steps>
        <Steps title="Submissão de Comprovativo de Pagamento" number="4" >
          {/* <section className="card-body col-sm-9">
              <div className="table-responsive mg-t-20">
                <Table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td className="text-end">$792.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span>Totals</span>
                      </td>
                      <td className="text-end text-muted">
                        <span>$792.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Order Total</span>
                      </td>
                      <td>
                        <h2 className="price text-end mb-0">$792.00</h2>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </section> */}
        </Steps>
        <Steps title="Controle de Carga" number="5">
          <section className="card-body col-sm-9">
            <Form.Group className="form-group">
              <Form.Label className="form-label">CardHolder Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="name12"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Card number</Form.Label>
              <InputGroup className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-append">
                  <Button
                    variant=""
                    className="btn btn-secondary"
                    type="button"
                  >
                    <i className="fab fa-cc-visa"></i> &nbsp;{" "}
                    <i className="fab fa-cc-amex"></i> &nbsp;
                    <i className="fab fa-cc-mastercard"></i>
                  </Button>
                </span>
              </InputGroup>
            </Form.Group>
            <Row>
              <Col sm={8}>
                <Form.Group className="form-group mb-sm-0">
                  <Form.Label className="form-label">Expiration</Form.Label>
                  <InputGroup className="input-group">
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className="form-group mb-0">
                  <Form.Label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </section>
        </Steps>
      </Wizardhor>
    );
  }
}