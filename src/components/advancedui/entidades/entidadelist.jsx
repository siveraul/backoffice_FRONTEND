import React, { Fragment, useState } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { EntidadeList } from '../../../common/tablesfunctionaldata';

import { link } from '../../../service';
import Select from 'react-select';
import axios from 'axios';

const Entidadelist = () => {
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSave = async () => {
		try {
			const tokendata = localStorage.getItem('token');
			const token = tokendata + '';
			console.log('novo token', token);
			const nome = document.getElementById('inputName').value;
			const email = document.getElementById('inputName1').value;
			const contacto = document.getElementById('inputName2').value;
			const dataInicioA = document.getElementById('inputName3').value;
			const entidadepag = document.getElementById('inputName4').value;
			const referencia = document.getElementById('inputName5').value;
			const nuit = document.getElementById('inputName6').value;
			const alvara = document.getElementById('inputName7').value;


			const request = await axios.post(`${link}/api/createEntidade`, {
				'e_nome': nome,
				'e_email': email,
				'e_contacto': contacto,
				'e_Nuit': nuit,
				'e_entidade_banco': entidadepag,
				'e_referencia_banco': referencia,
				'e_Data_início_actividade': dataInicioA,

				'e_alvara': alvara,
				'e_tipo_entidade': selectedOption.label
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

	const options = [
		{ id: 0, label: 'Empresa de transporte' },
		{ id: 1, label: 'Inspeccao' },
		{ id: 2, label: 'Outros' },
	];

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);

	};
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


	return (
		<Fragment>

			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Entidade</Link>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Adicionar Entidade</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<FormGroup className="form-group">
									<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome do Entidade" />
								</FormGroup>

								<FormGroup className="form-group">
									<Form.Control type="email" className="form-control" id="inputName1" placeholder="Email" />
								</FormGroup>
								<div className="gap-5 mt-3" style={{ display: "flex", flexDirection: 'row' }}>
									<Form.Group controlId="formContacto">
										<Form.Control type="number" className="form-control" id="inputName2" placeholder="Contacto" />
									</Form.Group>
									<Form.Group controlId="formInicioA">

										<Form.Control
											type="date"
											className="form-control" id="inputName3" placeholder="Data de Inicio de Actividade"
										/>
									</Form.Group>
								</div>
								<div className="gap-5 mt-3" style={{ display: "flex", flexDirection: 'row' }}>
									<Form.Group controlId="formEntidade">

										<Form.Control
											type="text"
											className="form-control" id="inputName4" placeholder="Entidade"
										/>
									</Form.Group>
									<Form.Group controlId="formReferencia">

										<Form.Control
											type="text"
											className="form-control" id="inputName5" placeholder="Referencia"
										/>
									</Form.Group>
								</div>
								<div className="gap-5 mt-3" style={{ display: "flex", flexDirection: 'row' }}>
									<Form.Group controlId="formNuit">

										<Form.Control
											type="text"
											className="form-control" id="inputName6" placeholder="NUIT"
										/>
									</Form.Group>
									<Form.Group controlId="formAlvara">

										<Form.Control
											type="text"
											className="form-control" id="inputName7" placeholder="Alvara"
										/>
									</Form.Group>
								</div>
								<FormGroup className="form-group">
									<Form.Label>Tipo de Entidade</Form.Label>
									<Select
										options={options}
										value={selectedOption}
										onChange={handleChange}
										placeholder="Selecione uma opção"
										isSearchable
										classNamePrefix='Select2' className="multi-select"
									/>
								</FormGroup>
							</Form>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="" className="btn ripple btn-primary" type="button" onClick={handleSave}>
								Add
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>

				</div>
			</div>

			<EntidadeList />
		</Fragment>
	);
}

Entidadelist.propTypes = {};

Entidadelist.defaultProps = {};

export default Entidadelist;
