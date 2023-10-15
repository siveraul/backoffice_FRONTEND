import React, { Fragment, useState, useEffect } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { AeroportoList } from '../../../common/tablesfunctionaldata';
import { link } from '../../../service';
import Select from 'react-select';
import axios from 'axios';

const Aeroportolist = () => {
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOption2, setSelectedOption2] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const permissoesData = localStorage.getItem("permissoes");
	const permissoes = JSON.parse(permissoesData);

	useEffect(() => {
		// Fetch data from your API endpoint here
		fetch(`${link}/api/BuscarTodosProvincias`)
			.then((response) => response.json())
			.then((data) => {
				// Assuming your API response is an array of objects
				setData(data);
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
			const email = document.getElementById('inputName1').value;
			const contacto = document.getElementById('inputName2').value;
			const tipo = document.getElementById('inputName3').value;

			const request = await axios.post(`${link}/api/CriarAeroporto`, {
				'a_nome': nome,
				'a_email': email,
				'a_contacto': contacto,
				'a_Tipo_aeroporto': selectedOption2.value,
				'id_provincia': selectedOption.value
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
		value: item.p_id,
		label: item.p_nome
	}));

	const options2 = [
		{ id: 0, label: 'Nacional' },
		{ id: 1, label: 'Internacional' },

	];

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);


	};

	const handleChange2 = (selectedOption) => {
		setSelectedOption2(selectedOption);


	};



	return (
		<Fragment>

			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
				{ permissoes.criar_aeroporto ===1?(
					<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Aeroporto</Link>
					):(
						<></>
					)
					}
					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							
								<>
								<h6 className="modal-title">Adicionar Aeroporto</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
								</>
							
						</Modal.Header>

						<Modal.Body className="modal-body">
							<div className="p-4">
								<Form className="form-horizontal">
									<FormGroup className="form-group">
										<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome do Aeroporto" />
									</FormGroup>

									<FormGroup className="form-group">
										<Form.Control type="email" className="form-control" id="inputName1" placeholder="Email" />
									</FormGroup>
									<FormGroup className="form-group">
										<Form.Control type="number" className="form-control" id="inputName2" placeholder="Contacto" />
									</FormGroup>
									<FormGroup className="form-group">

										<Form.Label>Tipo do Aeroporto</Form.Label>
										<Select
											options={options2}
											value={selectedOption2}
											onChange={handleChange2}
											placeholder="Selecione uma opção"
											required
											classNamePrefix='Select2' className='multi-select'
											isSearchable

										/>
									</FormGroup>
									<FormGroup className="form-group">
										<Form.Label>Provincia</Form.Label>
										<Select
											options={options}
											value={selectedOption}
											onChange={handleChange}
											placeholder="Selecione uma opção"
											required
											classNamePrefix='Select2' className='multi-select'
											isSearchable

										/>
									</FormGroup>
									{/* <FormGroup className="form-group">
										<Select
											options={options}
											value={selectedOption}
											onChange={handleChange}
											placeholder="Selecione uma opção"
										/>
									</FormGroup> */}


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

			<AeroportoList />
		</Fragment>
	);
}

Aeroportolist.propTypes = {};

Aeroportolist.defaultProps = {};

export default Aeroportolist;
