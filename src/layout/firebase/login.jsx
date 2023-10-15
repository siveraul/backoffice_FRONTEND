import React, { useState } from 'react';
import { Button, Col, Form, Row, Alert, Tab, Nav, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { imagesData } from '../../common/commonimages';
import axios from 'axios';
import { link } from '../../service';

const SignIn = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "",
    "password": "",
  });
  const [statusLog, SetStatusLog] = useState(0);

  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${import.meta.env.BASE_URL}dashboard/dashboard1/`;
    navigate(path);
  }

  const routeChange2 = () => {
    let path = `${import.meta.env.BASE_URL}pages/authentication/resetpassword/`;
    navigate(path);
  }

  const Login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => { console.log(user); routeChange() }).catch(err => { console.log(err); setError(err.message) })
  }

  const getLogin = async () => {
    var stat;
    try {
      const response = await axios.post(`${link}/api/LoginUtilizador`, {
        "username": data.email,
        "password": data.password
      });


      stat = response.status;

      const tokenvalue = response.data.token;
      localStorage.setItem("token", tokenvalue);

      console.log('token');
      console.log(tokenvalue);

      const partesToken = tokenvalue.split('.');
      const payloadBase64 = partesToken[1];

      const payloadJSON = JSON.parse(atob(payloadBase64));

      /* console.log('permissoes');
      console.log(payloadJSON.permissoes); */

      localStorage.setItem("NomeUser", payloadJSON.nome);
      const objecto = JSON.stringify(payloadJSON.permissoes);

      localStorage.setItem("permissoes", objecto);

      SetStatusLog(stat);

    } catch (error) {
      console.log(error);
    }
    return stat;
  };

  const Login1 = async () => {

    const stat = await getLogin();

    console.log('status');
    console.log(stat);

    if (stat == 200) {
      routeChange();
    }
    else {
      setError("Dados de login Invalidos");
    }
  };
  return (
    <React.Fragment>
      <div className="square-box"> </div>
      <div className="page bg-primary">
        <div className="page-single">
          <div className="container" style={{ marginTop: "89px" }} >
            <Row>
              <Col lg={5} className="d-block mx-auto login-page">
                <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                  <Card className='rounded-4'>
                    <Nav variant="pills" className="justify-content-center authentication-tabs">
                      {/* <Nav.Item>
                      <Nav.Link eventKey="react"><img src={imagesData('react')} alt='logo2' /></Nav.Link>
                    </Nav.Item> */}
                      {/*  <Nav.Item>
                      <Nav.Link eventKey="firebase"> <img src={imagesData('firebase')} alt='logo1' /></Nav.Link>
                    </Nav.Item>  */}
                    </Nav>
                    <Tab.Content>
                      {/*                     <Tab.Pane eventKey="firebase">
                      <div className="card-sigin">
                      <div className="main-card-signin d-md-flex mx-auto">
                            <div className="wd-100p">
                              <div className="d-flex mb-4">
                                <Link to="#">
                                  <img
                                    src={imagesData('favicon')}
                                    className="sign-favicon ht-40"
                                    alt="logo"
                                  />
                                </Link>
                              </div>
                              <div className="">
                                <div className="main-signup-header">
                                  <h2>Bem vindo de volta!</h2>
                                  <h6 className="font-weight-semibold mb-4">
                                    Please sign in to continue.
                                  </h6>
                                  <div className="panel panel-primary">
                                    <div className=" tab-menu-heading mb-2 border-bottom-0">
                                      <div className="tabs-menu1">
                                        {err && <Alert variant="danger">{err}</Alert>}
                                        <Form >
                                          <Form.Group className="form-group">
                                            <Form.Label className=''>Email</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Enter your email"
                                              name="email"
                                              type='text'
                                              value={email}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Form.Group className="form-group">
                                            <Form.Label>Password</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Enter your password"
                                              name="password"
                                              type='password'
                                              value={password}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Button
                                            variant=""
                                            type='submit'
                                            className="btn btn-primary btn-block"
                                            onClick={Login}
                                          >
                                            Sign In
                                          </Button>

                                          <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                            <Link
                                              to="https://www.facebook.com/"
                                              target="_blank"
                                              className="btn btn-icon btn-facebook me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.twitter.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.linkedin.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.instagram.com/"
                                              target="_blank"
                                              className="btn  btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="main-signin-footer text-center mt-3">
                                            <p><Link to="#" className="mb-3">Forgot password?</Link></p>
                                            <p>Don't have an account ? <Link to={`${import.meta.env.BASE_URL}/authentication/signup/`} className=""> Create an Account</Link></p>
                                          </div>
                                        </Form>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Tab.Pane> */}
                      <Tab.Pane eventKey="react">
                        <div className="card-sigin">
                          <div className="main-card-signin d-md-flex">
                            <div className="wd-100p ">
                              <div className="d-flex mb-4">
                                <Link to="#">
                                  <img
                                    src={imagesData('favicon')}
                                    className="sign-favicon ht-40"
                                    alt="logo"
                                  />
                                </Link>
                              </div>
                              <div className="">
                                <div className="main-signup-header">
                                  <h2>Bem vindo!</h2>
                                  <h6 className="font-weight-semibold mb-4">
                                    Ingresse para proceder.
                                  </h6>
                                  <div className="panel panel-primary">
                                    <div className=" tab-menu-heading mb-2 border-bottom-0">
                                      <div className="tabs-menu1">
                                        {err && <Alert variant="danger">{err}</Alert>}
                                        <Form >
                                          <Form.Group className="form-group">
                                            <Form.Label>Nome de Utilizador</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Introduza o nome de utilizador"
                                              name="email"
                                              type='text'
                                              value={email}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Form.Group className="form-group">
                                            <Form.Label>Palavra-Passe</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Introduza a palavra-passe"
                                              name="password"
                                              type='password'
                                              value={password}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Button
                                            variant=""
                                            className="btn btn-primary btn-block" onClick={Login1}

                                          >
                                            Entrar
                                          </Button>

                                          {/*                                           <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                            <Link
                                              to="https://www.facebook.com/"
                                              target="_blank"
                                              className="btn btn-icon btn-facebook me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.twitter.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.linkedin.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.instagram.com/"
                                              target="_blank"
                                              className="btn  btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                          </div> 
                                          <div className="main-signin-footer text-center mt-3">
                                            <p><Link to={`${import.meta.env.BASE_URL}pages/authentication/forgotpassword/`} className="mb-3">Esqueceu a Palavra-Passe?</Link></p>
                                            <p>Ainda não tem uma conta? <Link to="" className=""> Crie conta</Link></p>
                                          </div>*/}
                                        </Form>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card>
                </Tab.Container>
              </Col>

            </Row>
          </div>
        </div >
      </div>
    </React.Fragment>
  );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
