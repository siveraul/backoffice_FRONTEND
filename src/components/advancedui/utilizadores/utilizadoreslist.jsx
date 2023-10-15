import React, { Fragment, useState, useEffect } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { UtilizadoresList } from '../../../common/tablesfunctionaldata';
import { link } from '../../../service';
import Select from 'react-select';
import axios from 'axios';

const Utilizadoreslist = () => {
	const [show, setShow] = useState(false);

	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);

	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOption2, setSelectedOption2] = useState(null);
	const [selectedOption3, setSelectedOption3] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		// Fetch data from your API endpoint here
		fetch(`${link}/api/BuscarTodosAeroportos`)
			.then((response) => response.json())
			.then((data) => {

				setData(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});

		fetch(`${link}/api/getEntidades`)
			.then((response) => response.json())
			.then((data) => {

				setData2(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});

		fetch(`${link}/api/BuscarTodosPerfisPermissoes`)
			.then((response) => response.json())
			.then((data) => {

				setData3(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	const handleSave = async () => {
		try {
			const tokendata = localStorage.getItem('token');
			const token = tokendata + '';
			console.log('novo token', token);
			const nome = document.getElementById('inputName').value;
			const contacto = document.getElementById('inputName2').value;
			const email = document.getElementById('inputName1').value;
			const numero_doc = document.getElementById('inputName3').value;
			const username = document.getElementById('inputNameUser').value;

			const request = await axios.post(`${link}/api/CriarUtilizador`, {
				'u_nome': nome,
				'u_Email': email,
				'u_nome_usuário': username,
				'u_MSISDN_contacto': contacto,
				'u_numero_documento': numero_doc,
				'u_aeroporto_id': selectedOption.value,
				'id_entidade': selectedOption2.value,
				'u_permissoes_id': selectedOption3.value,
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

	const options = data.map((item) => ({
		value: item.a_id,
		label: item.a_nome
	}));

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	const options2 = data2.map((item) => ({
		value: item.e_id,
		label: item.e_nome
	}));

	const handleChange2 = (selectedOption) => {
		setSelectedOption2(selectedOption);
	};

	const options3 = data3.map((item) => ({
		value: item.pp_id,
		label: item.pp_nome
	}));

	const handleChange3 = (selectedOption) => {
		setSelectedOption3(selectedOption);
	};

	const permissoesData = localStorage.getItem("permissoes");
	const permissoes = JSON.parse(permissoesData);

	return (
		<Fragment>

			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					{
						permissoes.criar_utilizador === 1 ? (
							<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Utilizador</Link>
						) : <></>
					}


					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Add User</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<Form.Group controlId="formNome">
									<Form.Label>Nome</Form.Label>
									<Form.Control
										type="text"
										placeholder='Primeiro e ultimo nome '
										className="form-control" id="inputName"
										required
									/>
								</Form.Group>
								<Form.Group controlId="formNome">
									<Form.Label>Credenciais: Username</Form.Label>
									<Form.Control
										type="text"
										placeholder='Utilizador'
										className="form-control" id="inputNameUser"
										required
									/>
								</Form.Group>
								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="text"
										placeholder='Email'
										className="form-control" id="inputName1"
									/>
								</Form.Group>
								<div className="gap-5" style={{ display: "flex", flexDirection: 'row' }}>
									<Form.Group controlId="formContacto">
										<Form.Label>Contacto</Form.Label>
										<Form.Control
											type="number"
											placeholder='Contacto'
											className="form-control" id="inputName2"
											min={0}
										/>
									</Form.Group>
									<Form.Group controlId="formContacto">
										<Form.Label>Numero de ID</Form.Label>
										<Form.Control
											type="number"
											placeholder='Numero de Documento de Identificacao'
											className="form-control" id="inputName3"
											min={0}
										/>
									</Form.Group>

								</div>
								<FormGroup className="form-group">
									<Form.Label>Aeroporto</Form.Label>
									<Select
										options={options}
										value={selectedOption}
										onChange={handleChange}
										placeholder="Selecione uma opção"
									/>
								</FormGroup>
								<FormGroup className="form-group">
									<Form.Label>Entidade</Form.Label>
									<Select
										options={options2}
										value={selectedOption2}
										onChange={handleChange2}
										placeholder="Selecione uma opção"
										isSearchable
										classNamePrefix='Select2' className="multi-select"
									/>
								</FormGroup>
								<FormGroup className="form-group">
									<Form.Label>Perfil ou classe de permissão</Form.Label>
									<Select
										options={options3}
										value={selectedOption3}
										onChange={handleChange3}
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
								Salvar
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Fechar
							</Button>
						</Modal.Footer>
					</Modal>

				</div>
			</div>

			<UtilizadoresList />
		</Fragment>
	);
}

Utilizadoreslist.propTypes = {};

Utilizadoreslist.defaultProps = {};

export default Utilizadoreslist;
