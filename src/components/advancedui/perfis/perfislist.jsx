import React, { Fragment, useState, useEffect } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal, Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { PerfisList } from '../../../common/tablesfunctionaldata';
import axios from 'axios';
import { link } from '../../../service';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const permissoesData = localStorage.getItem("permissoes");
const permissoes = JSON.parse(permissoesData);

const Perfislist = () => {
	const [show, setShow] = useState(false);
	const [expanded, setExpanded] = useState([]);
	const [selected, setSelected] = useState([]);

	const [expanded2, setExpanded2] = useState([]);
	const [selected2, setSelected2] = useState([]);

	const [loading, setLoading] = useState(true);

	const [expanded3, setExpanded3] = useState([]);
	const [selected3, setSelected3] = useState([]);

	const [checkboxValues, setCheckboxValues] = useState({
		createZonas: 0,
		alterZonas: 0,
		deleteZonas: 0,
		viewZonas: 0,

		createProvincias: 0,
		alterProvincias: 0,
		deleteProvincias: 0,
		viewProvincias: 0,

		createDistritos: 0,
		alterDistritos: 0,
		deleteDistritos: 0,
		viewDistritos: 0,

		createEntidades: 0,
		alterEntidades: 0,
		deleteEntidades: 0,
		viewEntidades: 0,

		createAeroportos: 0,
		alterAeroportos: 0,
		deleteAeroportos: 0,
		viewAeroportos: 0,

		createTerminais: 0,
		alterTerminais: 0,
		deleteTerminais: 0,
		viewTerminais: 0,

		createSessaoTerminais: 0,
		alterSessaoTerminais: 0,
		deleteSessaoTerminais: 0,
		viewSessaoTerminais: 0,

		createTipoCarga: 0,
		alterTipoCarga: 0,
		deleteTipoCarga: 0,
		viewTipoCarga: 0,

		createPerfis: 0,
		alterPerfis: 0,
		deletePerfis: 0,
		viewPerfis: 0,

		createUtilizadores: 0,
		alterUtilizadores: 0,
		deleteUtilizadores: 0,
		viewUtilizadores: 0,

		confirmScanPassagemOrigim: 0,
		validarDadosBalcaoOrigin: 0,
		confirmPagamentosOriginDestino: 0,
		controloCargaAeroportoConfirmRecepcaoOrigin: 0,
		confirmEntradaCargaDestino: 0,
		confirmComprimentoProcessoAduaneiroDestino: 0,
		confirmMovimentoCargaDestino: 0,
		confirmActualizarDetalhesCargaDestino: 0,
		confirmPagamentoDestino: 0,
		controloCargaValidarInformacaoDestino: 0,
		agenteTerminalConfirmRecepcaoCargaDestino: 0,
		congelarCargaDestinoOrigin: 0,

		createTaxas: 0,
		alterTaxas: 0,
		deleteTaxas: 0,
		viewTaxas: 0,

	});

	const handleCheckboxChange = (event, checkboxName) => {
		const isChecked = event.target.checked ? 1 : 0;
		setCheckboxValues({ ...checkboxValues, [checkboxName]: isChecked });
		console.log(checkboxValues);
	};


	const handleToggle = (_event, nodeIds) => {
		setExpanded(nodeIds);
	};

	const handleSelect = (_event, nodeIds) => {
		setSelected(nodeIds);
	};

	const handleExpandClick = () => {
		setExpanded((oldExpanded) =>
			oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
		);
	};

	const handleToggle2 = (_event, nodeIds) => {
		setExpanded2(nodeIds);
	};

	const handleSelect2 = (_event, nodeIds) => {
		setSelected2(nodeIds);
	};

	const handleExpandClick2 = () => {
		setExpanded2((oldExpanded) =>
			oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
		);
	};

	const handleToggle3 = (_event, nodeIds) => {
		setExpanded3(nodeIds);
	};

	const handleSelect3 = (_event, nodeIds) => {
		setSelected3(nodeIds);
	};

	const handleExpandClick3 = () => {
		setExpanded3((oldExpanded) =>
			oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
		);
	};

	const handleClose = () => setShow(false);

	const handleSendDataToServer = async () => {
		try {
			const token = localStorage.getItem('token');
			console.log('novo token', token);
			const nome = document.getElementById('inputName').value;

			const postData = {
				pp_nome: nome,
				criar_zona: checkboxValues.createZonas,
				editar_zona: checkboxValues.alterZonas,
				deletar_zona: checkboxValues.deleteZonas,
				ver_zona: checkboxValues.viewZonas,

				criar_provincia: checkboxValues.createProvincias,
				editar_provincia: checkboxValues.alterProvincias,
				deletar_provincia: checkboxValues.deleteProvincias,
				ver_provincia: checkboxValues.viewProvincias,

				criar_distrito: checkboxValues.createDistritos,
				editar_distrito: checkboxValues.alterDistritos,
				ver_distrito: checkboxValues.viewDistritos,
				deletar_distrito: checkboxValues.deleteDistritos,

				criar_aeroporto: checkboxValues.createAeroportos,
				editar_aeroporto: checkboxValues.alterAeroportos,
				deletar_aeroporto: checkboxValues.deleteAeroportos,
				ver_aeroporto: checkboxValues.viewAeroportos,

				// entidades

				criar_tipo_carga: checkboxValues.createTipoCarga,
				editar_tipo_carga: checkboxValues.alterTipoCarga,
				deletar_tipo_carga: checkboxValues.deleteTipoCarga,
				ver_tipo_carga: checkboxValues.viewTipoCarga,

				criar_permissoes: checkboxValues.createPerfis,
				editar_permissoes: checkboxValues.alterPerfis,
				deletar_permissoes: checkboxValues.deletePerfis,
				ver_permissoes: checkboxValues.viewPerfis,

				criar_terminal: checkboxValues.createTerminais,
				editar_terminal: checkboxValues.alterTerminais,
				deletar_terminal: checkboxValues.deleteTerminais,
				ver_terminal: checkboxValues.viewTerminais,

				criar_sessao_do_terminal: checkboxValues.createSessaoTerminais,
				editar_sessao_do_terminal: checkboxValues.alterSessaoTerminais,
				deletar_sessao_do_terminal: checkboxValues.deleteSessaoTerminais,
				ver_sessao_do_terminal: checkboxValues.viewSessaoTerminais,

				criar_utilizador: checkboxValues.createUtilizadores,
				editar_utilizador: checkboxValues.alterUtilizadores,
				detelar_utilizador: checkboxValues.deleteUtilizadores,
				ver_utilizador: checkboxValues.viewUtilizadores,

				criar_taxa: checkboxValues.createTaxas,
				editar_taxa: checkboxValues.alterTaxas,
				deletar_taxa: checkboxValues.deleteTaxas,
				ver_taxa: checkboxValues.viewTaxas,

				confirmar_passagem_por_scan_origim: checkboxValues.confirmScanPassagemOrigim,
				validar_dados_como_balcao_origim: checkboxValues.validarDadosBalcaoOrigin,
				confirma_pagamentos_origim_e_destino: checkboxValues.confirmPagamentosOriginDestino,
				controlo_carga_aeroporto_confirma_recepcao_origim: checkboxValues.controloCargaAeroportoConfirmRecepcaoOrigin,
				confirmar_entrada_carga_destino: checkboxValues.confirmEntradaCargaDestino,
				Confirmar_cumprimento_de_processos_aduaneiros_destino: checkboxValues.confirmComprimentoProcessoAduaneiroDestino,
				confirmar_movimento_Carga_destino: checkboxValues.confirmMovimentoCargaDestino,
				confirmar_e_actualizarDetalhesCarga_destino: checkboxValues.confirmActualizarDetalhesCargaDestino,
				confirmar_pagamento_destino: checkboxValues.confirmPagamentoDestino,
				controlo_carga_validar_informacao_destino: checkboxValues.controloCargaValidarInformacaoDestino,
				agente_ter_confirma_recepcao_carga_destino: checkboxValues.agenteTerminalConfirmRecepcaoCargaDestino,
				congelar_carga_destino_origim: checkboxValues.congelarCargaDestinoOrigin,

			};

			const request = await axios.post(`${link}/api/CriarPerfilPermissoes`, postData,
				{
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
			console.log(request.data);
			handleClose();

		} catch (err) {
			console.log(err);
		}

	}

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

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		setLoading(true);
	}, [])

	const handleShow = () => setShow(true);


	return (
		<>

			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					{
						permissoes.criar_permissoes === 1 ? (
							<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Adicionar Perfil</Link>
						) : <></>
					}


					<Modal show={show} onHide={handleClose} fullscreen={true}  >
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Adicionar Perfil</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<FormGroup className="form-group">
									<Form.Label> Nome do Perfil</Form.Label>
									<Form.Control type="text" className="form-control" id="inputName" placeholder="Nome" />

								</FormGroup>
								<FormGroup className="form-group">
									<Form.Label> Permissões</Form.Label>
									<Row >
										<Col sm={12} xl={4} md={12} lg={6}>
											<span id="tree3" className="tree">
												<div>
													<Button variant="primary" className='btn' onClick={handleExpandClick} >
														{expanded.length === 0 ? 'Mostrar Todos' : 'Esconder Todos'}
													</Button>

													<TreeView className="treeview-1"
														aria-label="controlled"
														defaultCollapseIcon={<ExpandMoreIcon />}
														defaultExpandIcon={<ChevronRightIcon />}
														expanded={expanded}
														selected={selected}
														onNodeToggle={handleToggle}
														onNodeSelect={handleSelect}
														multiSelect
													>
														<TreeItem nodeId="1" label="Zonas, Provincias, Distritos, Entidades">

															<TreeItem nodeId="2" label="Zonas">
																<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Zonas`}
																		checked={checkboxValues.createZonas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createZonas')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Zonas`}
																		checked={checkboxValues.alterZonas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterZonas')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Zonas`}
																		checked={checkboxValues.deleteZonas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteZonas')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Zonas`}
																		checked={checkboxValues.viewZonas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewZonas')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="3" label="Provincias">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Provincias`}
																		checked={checkboxValues.createProvincias === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createProvincias')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Provincias`}
																		checked={checkboxValues.alterProvincias === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterProvincias')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Provincias`}
																		checked={checkboxValues.deleteProvincias === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteProvincias')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Provincias`}
																		checked={checkboxValues.viewProvincias === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewProvincias')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="4" label="Distritos">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Distritos`}
																		checked={checkboxValues.createDistritos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createDistritos')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Distritos`}
																		checked={checkboxValues.alterDistritos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterDistritos')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Distritos`}
																		checked={checkboxValues.deleteDistritos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteDistritos')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Distritos`}
																		checked={checkboxValues.viewDistritos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewDistritos')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="5" label="Entidades">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Entidades`}
																		checked={checkboxValues.createEntidades === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createEntidades')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Entidades`}
																		checked={checkboxValues.alterEntidades === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterEntidades')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Entidades`}
																		checked={checkboxValues.deleteEntidades === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteEntidades')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Entidades`}
																		checked={checkboxValues.viewEntidades === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewEntidades')}
																	/>
																</div>
															</TreeItem>
														</TreeItem>
													</TreeView>
												</div>
											</span>
										</Col>
										<Col sm={12} xl={4} md={12} lg={6}>
											<span id="tree3" className="tree">
												<div>
													<Button variant="primary" className='btn' onClick={handleExpandClick2} >
														{expanded2.length === 0 ? 'Mostrar todos' : 'Esconder todos'}
													</Button>

													<TreeView className="treeview-1"
														aria-label="controlled"
														defaultCollapseIcon={<ExpandMoreIcon />}
														defaultExpandIcon={<ChevronRightIcon />}
														expanded={expanded2}
														selected={selected2}
														onNodeToggle={handleToggle2}
														onNodeSelect={handleSelect2}
														multiSelect
													>
														<TreeItem nodeId="1" label="Aeroportos, Terminais, Sessão Terminais, Tipo de Carga">

															<TreeItem nodeId="6" label="Aeroportos">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Aeroportos`}
																		checked={checkboxValues.createAeroportos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createAeroportos')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Aeroportos`}
																		checked={checkboxValues.alterAeroportos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterAeroportos')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Aeroportos`}
																		checked={checkboxValues.deleteAeroportos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteAeroportos')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Aeroportos`}
																		checked={checkboxValues.viewAeroportos === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewAeroportos')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="7" label="Terminais">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Terminais`}
																		checked={checkboxValues.createTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createTerminais')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Terminais`}
																		checked={checkboxValues.alterTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterTerminais')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Terminais`}
																		checked={checkboxValues.deleteTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteTerminais')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Terminais`}
																		checked={checkboxValues.viewTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewTerminais')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="8" label="Sessão Terminais">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Sessão Terminais`}
																		checked={checkboxValues.createSessaoTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createSessaoTerminais')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Sessão Terminais`}
																		checked={checkboxValues.alterSessaoTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterSessaoTerminais')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Sessão Terminais`}
																		checked={checkboxValues.deleteSessaoTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteSessaoTerminais')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Sessão Terminais`}
																		checked={checkboxValues.viewSessaoTerminais === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewSessaoTerminais')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="9" label="Tipo de Carga">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Tipo de Carga`}
																		checked={checkboxValues.createTipoCarga === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createTipoCarga')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Tipo de Carga`}
																		checked={checkboxValues.alterTipoCarga === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterTipoCarga')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Tipo de Carga`}
																		checked={checkboxValues.deleteTipoCarga === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteTipoCarga')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Tipo de Carga`}
																		checked={checkboxValues.viewTipoCarga === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewTipoCarga')}
																	/>
																</div>
															</TreeItem>
														</TreeItem>
													</TreeView>
												</div>
											</span>
										</Col>
										<Col sm={12} xl={4} md={12} lg={6}>
											<span id="tree3" className="tree">
												<div>
													<Button variant="primary" className='btn' onClick={handleExpandClick3} >
														{expanded3.length === 0 ? 'Mostrar todos' : 'Esconder todos'}
													</Button>

													<TreeView className="treeview-1"
														aria-label="controlled"
														defaultCollapseIcon={<ExpandMoreIcon />}
														defaultExpandIcon={<ChevronRightIcon />}
														expanded={expanded3}
														selected={selected3}
														onNodeToggle={handleToggle3}
														onNodeSelect={handleSelect3}
														multiSelect
													>
														<TreeItem nodeId="10" label="Perfis, Utilizadores, Aprovações, Taxas">

															<TreeItem nodeId="11" label="Perfis">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Perfis`}
																		checked={checkboxValues.createPerfis === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createPerfis')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Perfis`}
																		checked={checkboxValues.alterPerfis === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterPerfis')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Perfis`}
																		checked={checkboxValues.deletePerfis === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deletePerfis')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Perfis`}
																		checked={checkboxValues.viewPerfis === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewPerfis')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="12" label="Utilizadores">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Utilizadores`}
																		checked={checkboxValues.createUtilizadores === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createUtilizadores')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Utilizadores`}
																		checked={checkboxValues.alterUtilizadores === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterUtilizadores')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Utilizadores`}
																		checked={checkboxValues.deleteUtilizadores === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteUtilizadores')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Utilizadores`}
																		checked={checkboxValues.viewUtilizadores === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewUtilizadores')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="13" label="Aprovações">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar Passagem Por Scan na Origem`}
																		checked={checkboxValues.confirmScanPassagemOrigim === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmScanPassagemOrigim')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Validar Dados de Origem`}
																		checked={checkboxValues.validarDadosBalcaoOrigin === 1}
																		onChange={(e) => handleCheckboxChange(e, 'validarDadosBalcaoOrigin')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar Pagamentos Origem`}
																		checked={checkboxValues.confirmPagamentosOriginDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmPagamentosOriginDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar Recepcao no Controlo de Carga do Aeroporto de Origem`}
																		checked={checkboxValues.controloCargaAeroportoConfirmRecepcaoOrigin === 1}
																		onChange={(e) => handleCheckboxChange(e, 'controloCargaAeroportoConfirmRecepcaoOrigin')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar Entrada da Carga no Destino`}
																		checked={checkboxValues.confirmEntradaCargaDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmEntradaCargaDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar cumprimento de Processo Aduaneiro no Destino`}
																		checked={checkboxValues.confirmComprimentoProcessoAduaneiroDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmComprimentoProcessoAduaneiroDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar movimento de carga no destino`}
																		checked={checkboxValues.confirmMovimentoCargaDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmMovimentoCargaDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar actualizacao de detalhes de carga`}
																		checked={checkboxValues.confirmActualizarDetalhesCargaDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmActualizarDetalhesCargaDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar pagamento no destino`}
																		checked={checkboxValues.confirmPagamentoDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'confirmPagamentoDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Validar informacao de destino da carga`}
																		checked={checkboxValues.controloCargaValidarInformacaoDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'controloCargaValidarInformacaoDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Confirmar recepcao de carga no destino`}
																		checked={checkboxValues.agenteTerminalConfirmRecepcaoCargaDestino === 1}
																		onChange={(e) => handleCheckboxChange(e, 'agenteTerminalConfirmRecepcaoCargaDestino')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Congelar carga no destino`}
																		checked={checkboxValues.congelarCargaDestinoOrigin === 1}
																		onChange={(e) => handleCheckboxChange(e, 'congelarCargaDestinoOrigin')}
																	/>
																</div>
															</TreeItem>
															<TreeItem nodeId="14" label="Taxas">
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Criar Taxas`}
																		checked={checkboxValues.createTaxas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'createTaxas')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Alterar Taxas`}
																		checked={checkboxValues.alterTaxas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'alterTaxas')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Eliminar Taxas`}
																		checked={checkboxValues.deleteTaxas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'deleteTaxas')}
																	/>
																</div>
																<div style={{ width: '100%' }} >
																	<Form.Check
																		type={'checkbox'}
																		label={`Visualizar Taxas`}
																		checked={checkboxValues.viewTaxas === 1}
																		onChange={(e) => handleCheckboxChange(e, 'viewTaxas')}
																	/>
																</div>
															</TreeItem>
														</TreeItem>
													</TreeView>
												</div>
											</span>
										</Col>
									</Row>
								</FormGroup>
							</Form>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="" className="btn ripple btn-primary" type="button" onClick={handleSendDataToServer}>
								Guardar
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Fechar
							</Button>
						</Modal.Footer>
					</Modal>

				</div>
			</div>


			{
				loading ? (
					<div style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%' }}>
						<Spinner
							animation="border" className="spinner-border me-2 text-dark" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</div>
				) :
					(
						<PerfisList />
					)
			}

		</>
	);
}

Perfislist.propTypes = {};

Perfislist.defaultProps = {};

export default Perfislist;
