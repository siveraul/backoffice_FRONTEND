import React, { Fragment, useState } from 'react';

import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { CargasAutoridadeCargaList } from '../../../common/tablesfunctionaldata';

const AprovacoesTab = () =>{


  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	
	return (
		<Fragment>
  <Pageheader title="GESTÃO DE CARGAS"  heading="Estados de Cargas"   active="Cargas" />
			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					

					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Add User</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<FormGroup className="form-group">
									<Form.Control type="text" className="form-control" id="inputName" placeholder="Name" />
								</FormGroup>
								<FormGroup className="form-group">
									<Form.Control type="text" className="form-control" id="inputName1" placeholder="Role" />
								</FormGroup>
								<FormGroup className="form-group">
									<Form.Control type="email" className="form-control" id="inputEmail3" placeholder="Email" />
								</FormGroup>
								<Form.Group className="form-group mb-0 justify-content-end">
									<div className="checkbox">
										<div className="custom-checkbox custom-control">
											<input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-2" />
											<label htmlFor="checkbox-2" className="custom-control-label mt-1 text-dark">New User?</label>
										</div>
									</div>
								</Form.Group>
							</Form>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="" className="btn ripple btn-primary" type="button">
								Add
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					
				</div>
			</div>

			<CargasAutoridadeCargaList />
		</Fragment>
	);
  }

AprovacoesTab.propTypes = {};

AprovacoesTab.defaultProps = {};

export default AprovacoesTab;
