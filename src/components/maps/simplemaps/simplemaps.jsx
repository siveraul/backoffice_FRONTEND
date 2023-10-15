import React,{ Fragment } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { Basicmarkers, Custommarkers, MapAnnotation, Europemap, Shapeworldmap, WorldMap} from "../../../common/mapsdata"
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Simplemaps = () =>{
    const [content, setContent] = React.useState("");
  return (
    <Fragment>
     <Pageheader title="SIMPLE MAPS"  heading="Maps"   active="Simple maps" />

      
      <Row className="row-sm">
        <Col lg={6}>
          <Card className="mg-b-20" id="map">
            <Card.Body>
              <div className="main-content-label mg-b-5">Vector Map: World</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="ht-300" id="vmap">
                <WorldMap setTooltipContent={setContent} />
                {content}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map1">
            <Card.Body>
              <div className="main-content-label mg-b-5">Graticule Map</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="ht-300" id="vmap3">
                <Shapeworldmap />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map2">
            <Card.Body>
              <div className="main-content-label mg-b-5">Annotation Map</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="ht-300" id="vmap2">
                <MapAnnotation />
              </div>
            </Card.Body>
          
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map6">
            <Card.Body>
              <div className="main-content-label mg-b-5">Europe Map</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="ht-300" id="vmap7">
                <Europemap />
              </div>
            </Card.Body>
            
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map7">
            <Card.Body>
              <div className="main-content-label mg-b-5">Basicmarkers Map</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="ht-300" id="vmap8">
                <Basicmarkers />
              </div>
            </Card.Body>
            
          </Card>
        </Col>
        <Col lg={6}>
          <div className="card" id="map8">
            <Card.Body>
              <div className="main-content-label mg-b-5">Custommarkers Map</div>
              <p className="">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="ht-300" id="vmap9">
                <Custommarkers />
              </div>
            </Card.Body>
           
          </div>
        </Col>
      </Row>
     
    </Fragment>
  );};

Simplemaps.propTypes = {};

Simplemaps.defaultProps = {};

export default Simplemaps;
