import React, { Fragment, useState, useEffect } from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { ProvinciaList } from '../../../common/tablesfunctionaldata';
import { link } from '../../../service';
import Select from 'react-select';
import axios from 'axios';

const Provincialist = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${link}/api/BuscarTodasZonas`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('novo token', token);
      const nome = document.getElementById('inputName').value; // Get the value from the input field

      const request = await axios.post(`${link}/api/CriarProvincia`, {
        'p_nome': nome,
        'id_zona': selectedOption.value
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
    value: item.z_id,
    label: item.z_nome
  }));

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected(selectedOption.value);

  };

  const permissoesData = localStorage.getItem("permissoes");
  const permissoes = JSON.parse(permissoesData);

  return (
    <Fragment>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content mt-2">
          {
            permissoes.criar_provincia === 1 ? (
              <Link className="btn ripple btn-primary" to="#" onClick={handleShow}>
                <i className="fe fe-plus me-2"></i>Adicionar Provincia
              </Link>
            ) : <></>
          }


          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header">
              <h6 className="modal-title">Adicionar Provincia</h6>
              <Button variant="" className="btn-close" type="button" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </Button>
            </Modal.Header>

            <Modal.Body className="modal-body">
              <div className="p-4">
                <Form className="form-horizontal">
                  <FormGroup className="form-group">
                    <Form.Control type="text" className="form-control" id="inputName" placeholder="Nome da Provincia" />
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

      <ProvinciaList />
    </Fragment>
  );
}

export default Provincialist;
