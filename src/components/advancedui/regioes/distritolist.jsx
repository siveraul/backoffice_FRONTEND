import React, { Fragment, useState, useEffect } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { DistritoList } from '../../../common/tablesfunctionaldata';
import { link } from '../../../service';
import Select from 'react-select';
import axios from 'axios';

const Distritolist = () => {
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);

	const permissoesData = localStorage.getItem("permissoes");
	const permissoes = JSON.parse(permissoesData);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
			const nome = document.getElementById('inputName').value; // Get the value from the input field

			const request = await axios.post(`${link}/api/CriarDistrito`, {
				'd_nome': nome,
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
					{
						permissoes.criar_distrito === 1 ? (
							<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Distrito</Link>
						) : <></>
					}


					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Adicionar Distrito</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body">
							<div className="p-4">
								<Form className="form-horizontal">
									<FormGroup className="form-group">
										<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome do Distrito" />
									</FormGroup>

									<FormGroup className="form-group">
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
								Salvar
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Fechar
							</Button>
						</Modal.Footer>
					</Modal>

				</div>
			</div>

			<DistritoList />
		</Fragment>
	);
}

Distritolist.propTypes = {};

Distritolist.defaultProps = {};

export default Distritolist;
