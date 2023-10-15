import { Box, Slider, SliderThumb, Tooltip, styled } from "@mui/material";
import React, { Fragment } from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
const Rangeslider = () => {
  //DiscreteSliderMarks
const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 100,
    label: "100",
  },
];
function valuetext(value) {
  return `${value}`;
}
//Rangeslider2
const marksrv = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetextrv(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
//rangeslider3
function valuetext2(value) {
  return `${value}`;
}
const [value, setValue] = React.useState([17, 74]);

const handleChange = (event, newValue) => {
  setValue(newValue);
};
//RangeSlider4
  const [value1, setValue1] = React.useState([10, 94]);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
//CustomizedSlider
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks12 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#000" : "#fff",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};


//CustomizedSlider1
function ValueLabelComponent1(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
ValueLabelComponent1.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
function AirbnbThumbComponent1(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent1.propTypes = {
  children: PropTypes.node,
};


//CustomizedSlider2
function ValueLabelComponent2(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent2.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

function AirbnbThumbComponent2(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent2.propTypes = {
  children: PropTypes.node,
};

//CustomizedSlider4
ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent3(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent3.propTypes = {
  children: PropTypes.node,
};



//TrackFalseSlider
const marksrt = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetextrt(value) {
  return `${value}°C`;
}

//TrackFalseSlider1
const marksrt1 = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetextrt1(value) {
  return `${value}°C`;
}

//TrackInvertedSlider
const marksin = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetextin(value) {
  return `${value}°C`;
}
//TrackInvertedSlider1
const marksin1 = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetextin1(value) {
  return `${value}°C`;
}
  return(
  <Fragment>
   <Pageheader title="RANGE SLIDER" heading="Apps" active="Range slider" />
   
    <Row>
      <Col sm={12} md={12} lg={12}>
      
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Range Slider (Modern Skin)
            </div>
            <p className="mg-b-20">
              It is the modern skin range slider of Redash.
            </p>
            <div className="p-3">
            <Row className="row-sm">
              <Col lg={12}>
               
                 <Box md={{ width: 100 }}>
      <Slider
        defaultValue={50}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="on"
        marks={marks}
      />
    </Box>
    
              </Col>
              <Col lg={12} className=" mg-t-20">
              
                <Box md={{ width: 100 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetextrv}
        step={null}
        valueLabelDisplay="auto"
        marks={marksrv}
      />
    </Box>
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={12} className=" mg-t-20">
               
                 <Box md={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext2}
      />
    </Box>
              </Col>
              <Col lg={12} className=" mg-t-20">
               
                 <Box md={{ width: 300 }}>
      <Slider
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="on"
        getAriaValueText={valuetext2}
      />
    </Box>
    
              </Col>
            </Row>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Range Slider (Outline Skin)
            </div>
            <p className="mg-b-20">
              It is the outline skin range slider of Redash.
            </p>
            <Row className="row-sm">
              <Col lg={12}>
              
                <Box md={{ width: 100 }}>
      <IOSSlider
        aria-label="ios slider"
        defaultValue={60}
        marks={marks12}
        valueLabelDisplay="on"
      />
    </Box>
              </Col>
              <Col lg={12} className=" mg-t-20">
              
                <Box md={{ width: 100 }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
    </Box>
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={12} className=" mg-t-20">
              
                <Box md={{ width: 100 }}>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent2,
        }}
        aria-label="custom thumb label"
        defaultValue={40}
      />
    </Box>
              </Col>
              <Col lg={12} className=" mg-t-20">
              
                <Box md={{ width: 100 }}>
      <AirbnbSlider
        components={{ Thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={[30, 65]}
      />
    </Box>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Range Slider</div>
            <p className="mg-b-20">Default range slider Of Nowa.</p>
            <div className="p-3">
            <Row className="row-sm">
              <Col lg={12}>
               
                <Box md={{ width: 100 }}>
      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetextrt}
        defaultValue={30}
        marks={marksrt}
      />
    </Box>
              </Col>
              <Col lg={12} className=" mg-t-20">
              
                <Box md={{ width: 100 }}>
      <Slider
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetextrt1}
        defaultValue={[20, 37, 50]}
        marks={marksrt1}
      />
    </Box>
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={12} className="TrackInvertedSlider mg-t-20">
             
                <Box md={{ width: 100 }}>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetextin}
        defaultValue={30}
        marks={marksin}
      />
    </Box>
              </Col>
              <Col lg={12} className="TrackInvertedSlider mg-t-20">
              
                <Box md={{ width: 100 }}>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetextin1}
        defaultValue={[20, 37]}
        marks={marksin1}
      />
    </Box>
              </Col>
            </Row>
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  </Fragment>
);
}
Rangeslider.propTypes = {};

Rangeslider.defaultProps = {};

export default Rangeslider;
