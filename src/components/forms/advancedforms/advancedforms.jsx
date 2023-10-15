import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Card, Col, InputGroup, Row, Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import { groupedOptions, options } from "../../../common/selectdata";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import { Link } from "react-router-dom";
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// 
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import Pageheader from "../../../layout/layoutcomponent/pageheader";
const AdvancedForms = () => {

  const [value, setValue] = useState();

  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selectedFiles, setselectedFiles] = useState([]);
  const [Singleselect, setSingleselect] = useState(null);
  const [Selectdis, setSelectdis] = useState(null);
  const [Search, setSearch] = useState(null);

//
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);
  //Fileuploader
  const [Fileuploader] = useState([]);



const uploader = Uploader({
  // Get production API keys from Upload.io
  apiKey: 'free'
});


const BasicMutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  const options=[
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
return (

  <MultiSelect
   value={selected}
      onChange={setSelected}
      labelledBy="Select"
    options={options}
    disableSearch
    className=""
     
  />
);
};
const BasicMutipleSelect2 = () => {
const [selected, setSelected] = useState([]);
const options=[
{ value: "Audi", label: "Audi" },
{ value: "BMW", label: "BMW" },
{ value: "volkswagen", label: "volkswagen" },
{ value: "Aston Martin", label: "Aston Martin" },
{ value: "mitsubishi", label: "mitsubishi" },
{ value: "hyundai", label: "hyundai" },
{ value: "fiat", label: "fiat" },
];
return (

<MultiSelect
 value={selected}
    onChange={setSelected}
    labelledBy="Select"
  options={options}
  disabled
/>
);
};
const BasicMutipleSelect3 = () => {
const [selected, setSelected] = useState([]);
const options=[
{ value: "Audi", label: "Audi" },
{ value: "BMW", label: "BMW" },
{ value: "volkswagen", label: "volkswagen" },
{ value: "Aston Martin", label: "Aston Martin" },
{ value: "mitsubishi", label: "mitsubishi" },
{ value: "hyundai", label: "hyundai" },
{ value: "fiat", label: "fiat" },
];
return (

<MultiSelect
 value={selected}
    onChange={setSelected}
    labelledBy="Select"
  options={options}
  hasSelectAll
  isCreatable
/>
);
};
  return (
    <Fragment>
      <Pageheader title="ADVANCED FORMS"  heading="Forms"   active="Advanced Forms" />

   
      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Single Select Style</h6>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Single Select</p>
                <div className=" SlectBox">
                  <Select
                    defaultValue={Singleselect}
                    onChange={setSingleselect}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix='Select2' className="multi-select"
                  />
                </div>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Disabled Select</p>
                <div className="SlectBox">
                  <Select
                    classNamePrefix='Select2' className="multi-select"
                    defaultValue={Selectdis}
                    onChange={setSelectdis}
                    options={options}
                    placeholder="eg1"
                    isDisabled="disable"
                  />
                </div>
              </div>
              <div>
                <p className="mg-b-10">Inline Search Select</p>
                <div className=" SlectBox">
                  <Select
                    defaultValue={Search}
                    onChange={setSearch}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix='Select2' className="multi-select"
                    isSearchable="true"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Multiple Select Styles</h6>
              </div>
              <div className="mb-3">
                <p className="mg-b-9">Multiple Select</p>
              
                <BasicMutipleSelect/>
              </div>
              <div className="mb-3">
                <p className="mg-b-9">Disabled Select</p>
                
                <BasicMutipleSelect2/>
              </div>
              <div>
                <p className="mg-b-9">Optgroup Support</p>
               
                <BasicMutipleSelect3/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Multiple Select Styles</h6>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Multiple Select-1</p>
                <Creatable
               classNamePrefix="Select2"
                  display="value"
                  options={groupedOptions}
                  value={selected1}
                  onChange={setSelected1}
                  labelledBy="Select"
                />
              </div>
              <div>
                <p className="mg-b-10">Multiple Select-2</p>
                <div>
                  <Creatable
                  classNamePrefix="Select2"
                    display="value"
                    options={groupedOptions}
                    value={selected2}
                    onChange={setSelected2}
                    labelledBy="Select"
                    isMulti
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Telephone Input</h6>
                <p className="text-muted card-sub-title">
                  A JavaScript plugin for entering and validating international
                  telephone numbers. It adds a flag dropdown to any input, detects
                  the user's country, displays a relevant placeholder and provides
                  formatting/validation methods.
                </p>
              </div>
              <InputGroup>
               <PhoneInput placeholder="Enter phone number"  value={value} onChange={setValue}/>
                <span className="input-group-btn tele-input">
                  <Button variant="primary" className="ripple" type="button">
                    Submit
                  </Button>
                </span>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">File Upload</h6>

              </div>
              <Row className="mb-4">
                <Col sm={12} md={4}>
                <FilePond files={files1}  onupdatefiles={setFiles1} allowMultiple={true}   maxFiles={3} server="/api" name="files" /* sets the file input name, it's filepond by default */  labelIdle='Drag & Drop your file here or click '
                                 />
                  
                  <div className="list-unstyled mb-0" id="file-previews">
                    {Fileuploader.map((f, i) => {
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
                </Col>
                <Col sm={12} md={4} className="mg-t-10 mg-md-t-0">
                  
                   <UploadButton uploader={uploader} options={{ multi: true }}>
                   
                   {({ onClick }) =>
                     <Form.Control className='file_input text-center' onClick={onClick} placeholder='click here and upload attachment' />
                   }
                 </UploadButton>
                </Col>
                <Col sm={12} md={4} className="mg-t-10 mg-md-t-0">

                  <FilePond disabled
                           files={files2}
                            onupdatefiles={setFiles2}
                            allowMultiple={true}
                            maxFiles={3}
                            server="/api"
                            name="files" 
                            /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your file here or click '
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
                </Col>
              </Row>
              <div className='textnone'>
                <div>
                 
                   <FilePond
                             files={files3}
                               onupdatefiles={setFiles3}
                                allowMultiple={true}
                               maxFiles={3}
                               server="/api"
                              name="files" /* sets the file input name, it's filepond by default */
                               labelIdle='Drag & Drop your file here or click '
                            
                             />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
}

AdvancedForms.propTypes = {};

AdvancedForms.defaultProps = {};

export default AdvancedForms;
