import React,{Fragment, useState } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { SessaoTerminaisList } from '../../../common/tablesfunctionaldata';
import axios from 'axios';
import {link} from '../../../service';

const SessaoTerminaislist = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);

   const handleSave = async () => {
	   try {
		   const token =  localStorage.getItem('token');
		   
		   const nome = document.getElementById('inputName').value; // Get the value from the input field

		   const request = await axios.post(`${link}/api/createSessaoTermal`, {
			   'st_nome': nome
		   }, 
		   {headers: {
			   'Authorization': `Bearer ${token}`
		   }});
		   console.log(request.data);
		   handleClose();

	   } catch (error) {
		   console.log(error);
	   }
   };


   const handleShow = () => setShow(true);

   const permissoesData = localStorage.getItem("permissoes");
const permissoes = JSON.parse(permissoesData);
	
	return (
		<Fragment>

			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					{
						permissoes.criar_sessao_do_terminal === 1 ?(
							<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Secção de Terminal</Link>
						): <></>
					}

					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Adicionar Secção de Terminal</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<FormGroup className="form-group">
								<Form.Label>Secção do Terminal</Form.Label>
									<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome da Secção do Terminal" />
								</FormGroup>
							</Form>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="" className="btn ripple btn-primary" type="button" onClick={handleSave}>
								Salvar
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Fechar
							</Button>
						</Modal.Footer>
					</Modal>
					
				</div>
			</div>

			<SessaoTerminaisList/>
		</Fragment>
	);
}

SessaoTerminaislist.propTypes = {};

SessaoTerminaislist.defaultProps = {};

export default SessaoTerminaislist;
