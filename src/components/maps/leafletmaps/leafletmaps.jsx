import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
const LeafletMaps = () => {
  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const position = [51.505, -0.09];
  //Popups
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  //Circle
  const redOptions = { color: "red" };
  const center = [51.505, -0.09];
  return (
    <Fragment>

     <Pageheader title="LEAFLET MAPS" heading="Maps" active="Leaflet maps" />

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Basic</div>
              <p className="mg-b-20">A default map style by Leaflet Maps.</p>
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                className="ht-300"
                id="leaflet1"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">With Popup</div>
              <p className="mg-b-20">
                Popups are usually used when you want to attach some information
                to a map.
              </p>
              <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={true}
                className="ht-200 ht-sm-300 ht-md-400 mb-0"
                id="leaflet3"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
                <CircleMarker
                  center={[51.51, -0.12]}
                  pathOptions={redOptions}
                  radius={20}
                >
                  <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
                <Polyline pathOptions={limeOptions} positions={polyline} />
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                <Polygon pathOptions={purpleOptions} positions={polygon} />
                <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
                <Rectangle bounds={rectangle} pathOptions={blackOptions} />
              </MapContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Map with circle</div>
              <p className="mg-b-20">
                Adding a circle is the same (except for specifying the radius in
                meters as a second argument), but lets you control how it looks by
                passing options as the last argument when creating the object.
              </p>
              <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={true}
                className="ht-300"
                id="leaflet2"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker
                  center={[51.51, -0.12]}
                  pathOptions={redOptions}
                  radius={20}
                >
                  <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
              </MapContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
}

LeafletMaps.propTypes = {};

LeafletMaps.defaultProps = {};

export default LeafletMaps;
