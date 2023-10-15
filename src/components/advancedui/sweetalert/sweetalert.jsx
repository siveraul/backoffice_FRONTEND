import React ,{ useState , Fragment }from 'react';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import Swal from "sweetalert2";
import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Sweetalert = () => {
  const [title, settitle] = useState('Your message');
  const [message, setmessage] = useState('Your message');

    //Primaryalertbutton
    function Primaryalertbutton() {
      Swal.fire({
          text:message,
          allowOutsideClick: false,
          confirmButtonText: "ok",
          cancelButtonColor: "#38cab3",
      });
  }
  //Secondaryalertbutton
  function Secondaryalertbutton() {
      Swal.fire({
          title: message,
          text: title,
          allowOutsideClick: false,
          confirmButtonText: "ok",
          cancelButtonColor: "#38cab3",
      });
  }
  //Infoalertbutton with images
  function Infoalertbutton() {
      Swal.fire({
          title: title,
          text: message,
          imageUrl: imagesData('favicon'),
          imageWidth: 80,
          imageHeight: 80,
          imageAlt: "Custom image",
      });
  }

  //Warningalertbutton
  function Warningalertbutton() {
      Swal.fire({
          title: message,
          allowOutsideClick: false,
          text: "Your message(close after 2seconds)",
          showConfirmButton: false,
          timer: 2000,
      });
  }


  function Basic() {
    Swal.fire({
      title: "Welcome to Your Admin Page",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
    });
  }
  function Title() {
    Swal.fire({
      title: "Here is  a title!",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      text: "All are available in the template",
    });
  }
  //Primaryalert
  function Primaryalert() {
    Swal.fire({
      title: "Well done!",
      icon: "success",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      text: "You clicked the button!",
    });
  }
  //Warningalert
  function PASSINGALERT() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Your will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }
  function Warningalert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  function Infoalertimg() {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: imagesData('female6'),
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Custom image",
    });
  }

  const Timer = () => {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  const Ajax = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(``)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }
  return (
    <Fragment>
     <Pageheader title="SWEET ALERT"  heading="Advanced UI"   active="Sweet alert" />

   
      <Row className="row-deck">
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Sweet-alert</h3>
            </Card.Header>
            <Card.Body className=" pt-0">
            <Table className="table card-table border">
            <tbody>
                <tr>
                    <td>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            className="form-control"
                            placeholder="Title text"
                            id="title"
                            onChange={(ele) => { settitle(ele.target.value); }}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bd-t-0 pt-1">
                        <Form.Label className="mt-0">Message</Form.Label>
                        <Form.Control
                            type="text"
                            className="form-control"
                            placeholder="Your message"
                            id="message"
                            onChange={(ele) => { setmessage(ele.target.value); }}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="mt-5  bd-t-0">
                        <input
                            type="button"
                            className="btn btn-primary mt-2"
                            value="Simple alert"
                            id="but1"
                            onClick={Primaryalertbutton}
                        />
                        &nbsp;
                        <input
                            type="button"
                            className="btn btn-danger mt-2"
                            value="Alert with title"
                            id="but2"
                            onClick={Secondaryalertbutton}
                        />
                        &nbsp;
                        <input
                            type="button"
                            className="btn btn-info mt-2"
                            value="Alert with image"
                            id="but3"
                            onClick={Infoalertbutton}
                        />
                        &nbsp;
                        <input
                            type="button"
                            className="btn btn-warning mt-2"
                            value="With timer"
                            id="but4"
                            onClick={Warningalertbutton}
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={6} lg={4} xl={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Basic Alert</h6>
                <p className="text-muted card-sub-title">A Basic Message</p>
              </div>
              <div
                className="btn ripple btn-primary"
                id="swal-basic"
                onClick={Basic}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Title alert</h6>
                <p className="text-muted card-sub-title">
                  A title with a text under
                </p>
              </div>
              <div
                className="btn ripple btn-danger"
                id="swal-title"
                onClick={Title}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Success alert</h6>
                <p className="text-muted card-sub-title">A Success Message</p>
              </div>
              <div
                className="btn ripple btn-success"
                id="swal-success"
                onClick={Primaryalert}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Warning alert</h6>
                <p className="text-muted card-sub-title">A warning message</p>
              </div>
              <div
                className="btn ripple btn-warning"
                id="swal-warning"
                onClick={Warningalert}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div className='parameteralert'>
                <h6 className="card-title mb-1">Passing a parameter alert</h6>
                <p className="text-muted card-sub-title">
                  By passing a parameter
                </p>
              </div>
              <div
                className="btn ripple btn-secondary parameteralert"
                id="swal-parameter"
                onClick={PASSINGALERT}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Image alert</h6>
                <p className="text-muted card-sub-title">
                  A message with custom Image
                </p>
              </div>
              <div
                className="btn ripple btn-info"
                id="swal-image"
                onClick={Infoalertimg}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Timer alert</h6>
                <p className="text-muted card-sub-title">
                  A message with auto close timer
                </p>
              </div>
              <div
                className="btn ripple btn-dark"
                id="swal-timer"
                onClick={Timer}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Ajax Alert</h6>
                <p className="text-muted card-sub-title">
                  With a loader (for a AJAX requests)
                </p>
              </div>
              <div
                className="btn ripple btn-pink"
                id="swal-ajax"
                onClick={Ajax}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
export default Sweetalert;
