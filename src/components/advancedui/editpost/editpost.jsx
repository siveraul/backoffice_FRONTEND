import React, {useState , Fragment} from 'react';
import { Breadcrumb, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FromInlineEditEditor } from '../../Forms/FormEditor/InlineEditeditor';
import SunEditor from 'suneditor-react';
import { Instructordata, Language } from '../../../common/selectdata';
import Select from 'react-select';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const Editpost = () =>{
    //filepond
    const [files, setFiles] = useState([]);
      // sun editor
      const htmlWithTableImages = '<center>  </center>';
      // Editor
      const [value, setValue] = useState(htmlWithTableImages);


  return(
  <Fragment>
     <Pageheader title="EDIT POST"  heading="Advanced UI"   active="Edit-Post" />

    <Row>
      <Col lg={12}md={12} >
        <Card>
          <Card.Body>
            <FormGroup>
              <Form.Label className="form-label text-dark">Course Title</Form.Label>
              <input
                type="text"
                className="form-control"
                defaultevalue="Advanced Web Develpment"
              />
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Category</Form.Label>
              <Language/>
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Instructor</Form.Label>
              <Select options={Instructordata} className="multi-select" classNamePrefix='Select2' placeholder="" /> 
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Type of mode</Form.Label>
              <div className="d-md-flex ad-post-details">
                <Form.Label className="custom-control custom-radio mb-2 me-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios2"
                    defaultevalue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Online{" "}
                    </Link>
                  </span>
                </Form.Label>
                <Form.Label className="custom-control custom-radio  mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios2"
                    defaultevalue="option2"
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Offline
                    </Link>
                  </span>
                </Form.Label>
              </div>
            </FormGroup>
            <div className="ql-wrapper border">
              
             
              <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize'],
                    ['paragraphStyle', 'blockquote'],
                    [
                      'bold',
                      'underline',
                      'italic',
                      'strike',
                      'subscript',
                      'superscript'
                    ],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list', 'lineHeight'],
                    ['outdent', 'indent'],
                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                    ['preview', 'print'],
                    ['removeFormat']
                  ],
                  defaultTag: 'div',
                  minHeight: '300px',
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: 'style',
                    table: 'cellpadding|width|cellspacing|height|style',
                    tr: 'valign|style',
                    td: 'styleinsert|height|style',
                    img: 'title|alt|src|style'
                  }
                }}
              />
              <hr />
            </div>
            <FormGroup>
              <Form.Label className="form-label text-dark">Course Type</Form.Label>
              <div className="d-md-flex ad-post-details">
                <Form.Label className="custom-control custom-radio mb-2 me-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios12"
                    defaultevalue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Free{" "}
                    </Link>
                  </span>
                </Form.Label>
                <Form.Label className="custom-control custom-radio  mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios12"
                    defaultevalue="option2"
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Paid
                    </Link>
                  </span>
                </Form.Label>
              </div>
            </FormGroup>
            <FormGroup className="p-4 border mb-4 form-group">
              <div>
              <div>
              <FilePond
        files={files} onupdatefiles={setFiles} allowMultiple={true}  maxFiles={3}  server="/api"  name="files" /* sets the file input name, it's filepond by default */  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
              </div>
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label">Upload Video URL</Form.Label>
              <input
                type="text"
                className="form-control"
                placeholder="https://videos.com"
                defaultevalue="https://www.youtube.com/embed/tMWkeBIohBs"
              />
            </FormGroup>
            <div className="control-group form-group  mb-0">
              <Form.Label className="form-label text-dark">
                Course Post Package
              </Form.Label>
              <div className=" border p-3 br-7">
                <div className="d-md-flex ad-post-details">
                  <label className="custom-control custom-radio mb-0 me-5">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option7"
                    />
                    <span className="custom-control-label">30 Days Free</span>
                  </label>
                  <label className="custom-control custom-radio  mb-0 me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option8"
                      defaultChecked
                    />
                    <span className="custom-control-label">
                      60 days / <span className="font-weight-bold">$20</span>
                    </span>
                  </label>
                  <label className="custom-control custom-radio  mb-0 me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option9"
                    />
                    <span className="custom-control-label">
                      6months /<span className="font-weight-bold">$50</span>
                    </span>
                  </label>
                  <label className="custom-control custom-radio  mb-0">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option10"
                    />
                    <span className="custom-control-label">
                      1 year / <span className="font-weight-bold">$80</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Card.Body>
          <div className="card-footer ">
            <Link to="#" className="btn btn-secondary">
              Save to Draft
            </Link>
            <Link to="#" className="btn btn-primary float-end">
              Publish Now
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
  }

Editpost.propTypes = {};

Editpost.defaultProps = {};

export default Editpost;
