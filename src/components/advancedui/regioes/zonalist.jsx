import React, { Fragment, useState } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { ZonaList } from '../../../common/tablesfunctionaldata';
import axios from 'axios';
import { link } from '../../../service';


const Zonalist = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const handleSave = async () => {
		try {
			const token = localStorage.getItem('token');
			console.log('novo token', token);
			const nome = document.getElementById('inputName').value; // Get the value from the input field

			const request = await axios.post(`${link}/api/CriarZona`, {
				'z_nome': nome
			},
				{
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
			console.log(request.data);
			handleClose();

		} catch (error) {
			console.log(error);
		}
	};


	const handleShow = () => setShow(true);
	function convertArrayOfObjectsToCSV(array) {
		let result;

		const columnDelimiter = ",";
		const lineDelimiter = "\n";
		const keys = Object.keys(data1[0]);

		result = "";
		result += keys.join(columnDelimiter);
		result += lineDelimiter;

		array.forEach((item) => {
			let ctr = 0;
			keys.forEach((key) => {
				if (ctr > 0) result += columnDelimiter;

				result += item[key];

				ctr++;
			});
			result += lineDelimiter;
		});

		return result;
	}

	const permissoesData = localStorage.getItem("permissoes");
	const permissoes = JSON.parse(permissoesData);

	return (
		<Fragment>

			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					{
						permissoes.criar_zona === 1 ? (
							<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Zona</Link>
						) : <></>
					}


					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Adicionar Zona</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<FormGroup className="form-group">
									<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome" />
								</FormGroup>
							</Form>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="" className="btn ripple btn-primary" type="button" onClick={handleSave}>
								Guardar
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Fechar
							</Button>
						</Modal.Footer>
					</Modal>

				</div>
			</div>

			<ZonaList />
		</Fragment>
	);
}

Zonalist.propTypes = {};

Zonalist.defaultProps = {};

export default Zonalist;
