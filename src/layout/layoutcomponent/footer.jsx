import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
return (
    <div className="main-footer">
    <Col md={12} sm={12} className=" text-center">
        <div className="container-fluid pt-0 ht-100p">
          Copyright © 2023{" "}
          <Link to="#" className="text-primary">
            DataProxy
          </Link>
          . Powered by
          <a href="https://www.mazaexpert.com" target="_blank" className="text-primary"> MazaExpert</a>. All rights reserved
        </div>
      </Col>
    </div>
);}




