import  { Fragment, useEffect, useState } from "react";
import {  Card, Col,  Row} from 'react-bootstrap';
import female1 from "../../../../assets/img/faces/1.jpg";
import female2 from "../../../../assets/img/faces/2.jpg";
import { Appdata } from "./checkoutdata";
import Pageheader from "../../../../layout/layoutcomponent/pageheader";
// interface CheckOutProps {}

//  const CheckOut: FC<CheckOutProps> = () => {

const Checkout = ({ local_varaiable }) =>{ 
 
  const [, setCartData] = useState([]);
  const [Price, setPrice] = useState(0);

const cartData  = [
  {
    id: Math.random(),
    preview: female1,
    title: "Flowerpot",
    oldprice: "2498",
    newprice: "290",
  },
  {
    id: Math.random(),
    preview: female2,
    title: "Mens Formal Red Shoes",
    oldprice: "2498",
    newprice: "124",
  },
];

useEffect(() => {
  
  if (local_varaiable == undefined) {
    
    setCartData(cartData);
    cartData.filter((ele) => {
      setPrice(Number(ele.newprice) + Price);
    });
  }
  else if (local_varaiable.length == 0) {
    
    setCartData(cartData);
    cartData.filter((ele) => {
      setPrice(Number(ele.newprice) + Price);
    });
  }
  else {
    
    setCartData(local_varaiable);
    local_varaiable.filter((ele) => {
      setPrice(Number(ele.newprice) + Price);
    });
  }
}, [local_varaiable]);

  return (
  <Fragment>

    <Pageheader title="CHECKOUT"  heading="Ecommerce"   active="Checkout" />
      <Row>
        <Col xl={12} className="">
          <Card className="custom-card">
            <Card.Header className="bg-transparent border-bottom-0">
              <div>
                <label className="main-content-label mb-2">Checkout</label>{" "}
                <span className="d-block tx-12 mb-0 text-muted">
                  The Project Budget is a tool used by project managers to
                  estimate the total cost of a project
                </span>
              </div>
            </Card.Header>
            <Card.Body className="mx-auto">
              
              <div className="checkout-steps wrapper">
                <div id="checkoutsteps">
                <Card>
        <Appdata/>
      </Card>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   
  </Fragment>
);
  };

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
