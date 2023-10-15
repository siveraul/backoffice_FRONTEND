import React, { Fragment, useState, useEffect } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { TaxaList } from '../../../common/tablesfunctionaldata';
import { link } from '../../../service';
import Select from 'react-select';
import axios from 'axios';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const Taxalist = () => {
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const [data4, setData4] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOption2, setSelectedOption2] = useState(null);
	const [selectedOption3, setSelectedOption3] = useState(null);
	const [selectedOption4, setSelectedOption4] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		// Fetch data from your API endpoint here
		fetch(`${link}/api/getEntidades`)
			.then((response) => response.json())
			.then((data) => {
				// Assuming your API response is an array of objects
				setData(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});

		fetch(`${link}/api/BuscarTodosTiposCarga`)
			.then((response) => response.json())
			.then((data) => {
				// Assuming your API response is an array of objects
				setData2(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});

		fetch(`${link}/api/BuscarTodosAeroportos`)
			.then((response) => response.json())
			.then((data) => {
				// Assuming your API response is an array of objects
				setData3(data);
				setData4(data);
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
			const peso_minimo = document.getElementById('inputName2').value;
			const valor_minimo = document.getElementById('inputName3').value;
			const peso_inicial = document.getElementById('inputName4').value;
			const peso_final = document.getElementById('inputName5').value;
			const valor_calculo = document.getElementById('inputName6').value;
			


			const request = await axios.post(`${link}/api/createtaxa`, {
				'ta_nome': nome,
				'ta_peso_minimo': peso_minimo,
				'ta_valor_minimo': valor_minimo,
				'ta_de_peso': peso_inicial,
				'ta_para_peso': peso_final,
				'ta_valor_calculo_de_para_peso': valor_calculo,
				'ta_tipo_carga_id': selectedOption2.value,
				'ta_id_aeroporto_origem': selectedOption3.value,
				'ta_id_aeroporto_destino': selectedOption4.value,
				'id_entidade': selectedOption.value
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
		value: item.e_id,
		label: item.e_nome
	}));

	const options2 = data2.map((item) => ({
		value: item.tc_id,
		label: item.tc_nome
	}));


	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	const handleChange2 = (selectedOption) => {
		setSelectedOption2(selectedOption);
	};

	const options3 = data3.map((item) => ({
		value: item.a_id,
		label: item.a_nome
	}));

	const options4 = data4.map((item) => ({
		value: item.a_id,
		label: item.a_nome
	}));


	const handleChange3 = (selectedOption) => {
		setSelectedOption3(selectedOption);
	};

	const handleChange4 = (selectedOption) => {
		setSelectedOption4(selectedOption);
	};


	return (
		<Fragment>
			<Pageheader title="CONFIGURACOES"  heading="Taxas"   active="Taxas" />
			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Taxa</Link>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Adicionar Taxa</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body">
							<div className="p-4">
								<Form className="form-horizontal">
									<FormGroup className="form-group">
										<Form.Label>Nome da Taxa</Form.Label>
										<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome" required />
									</FormGroup>

									<div className="gap-2" style={{ display: "flex", flexDirection: 'row' }}>
										<Form.Group controlId="formContacto">
											<Form.Label>Peso Minimo</Form.Label>
											<Form.Control type="number" className="form-control" id="inputName2" placeholder="Peso Minimo" min={0} />
										</Form.Group>
										<Form.Group controlId="formInicioA">
											<Form.Label>Valor Minimo</Form.Label>
											<Form.Control
												type="number"
												className="form-control" id="inputName3" placeholder="Valor Minimo" min={0}
											/>
										</Form.Group>
									</div>
									<div className="gap-2" style={{ display: "flex", flexDirection: 'row' }}>
										<Form.Group controlId="formContacto">
											<Form.Label>Peso Inicial</Form.Label>
											<Form.Control type="number" className="form-control" id="inputName4" placeholder="Peso Inicial" min={0} />
										</Form.Group>
										<Form.Group controlId="formInicioA">
											<Form.Label>Peso Final</Form.Label>
											<Form.Control
												type="number"
												className="form-control" id="inputName5" placeholder="Peso Final" min={0}
											/>
										</Form.Group>
									</div>
									<Form.Group controlId="formInicioA">
										<Form.Label>Valor de cálculo</Form.Label>
										<Form.Control
											type="number"
											className="form-control" id="inputName6" placeholder="Valor de calculo para intervalo de peso" min={0}
										/>
									</Form.Group>
									<FormGroup className="form-group">
										<Form.Label>Entidades</Form.Label>
										<Select
											options={options}
											value={selectedOption}
											onChange={handleChange}
											placeholder="Selecione uma opção"
											isSearchable
											classNamePrefix='Select2' className="multi-select"
										/>
									</FormGroup>
									<FormGroup className="form-group">
										<Form.Label>Aeroporto de origem</Form.Label>
										<Select
											options={options3}
											value={selectedOption3}
											onChange={handleChange3}
											placeholder="Selecione uma opção"
											isSearchable
											classNamePrefix='Select2' className="multi-select"
										/>
									</FormGroup>
									<FormGroup className="form-group">
										<Form.Label>Aeroporto de destino</Form.Label>
										<Select
											options={options4}
											value={selectedOption4}
											onChange={handleChange4}
											placeholder="Selecione uma opção"
											isSearchable
											classNamePrefix='Select2' className="multi-select"
										/>
									</FormGroup>
									<FormGroup className="form-group">
										<Form.Label>Tipo de carga</Form.Label>
										<Select
											options={options2}
											value={selectedOption2}
											onChange={handleChange2}
											placeholder="Selecione uma opção"
											required
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

			<TaxaList />
		</Fragment>
	);
}

Taxalist.propTypes = {};

Taxalist.defaultProps = {};

export default Taxalist;
