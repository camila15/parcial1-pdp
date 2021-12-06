import React, { useEffect, useState } from "react";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movimiento.css";

export default function Movimiento ({movimiento,eliminarapp,editarapp}){
    const formatterPeso = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      const [movimientoeditado, setMovimientoeditado] = useState({
        id:movimiento.id,
        tipoMovimiento:movimiento.tipoMovimiento,
        Nombre:movimiento.Nombre,
        Cantidad:movimiento.Cantidad,
      });

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const eliminar = () => {
        eliminarapp(movimiento.id)
      
    };
    const editar = (e) => {
        handleClose()
        editarapp(movimientoeditado)
      
    };

    const handleInputUpdate = (e) => {
        setMovimientoeditado({ ...movimientoeditado, [e.target.name]: e.target.value });
      };

      let auxMov = "";
  if (movimiento.tipoMovimiento === "Gasto") {
    auxMov = "Ingreso";
  } else {
    auxMov = "Gasto";
  }

    return(
        <>
        <tr>
        <td className="columna">
          {" "}
          <img 
          width="50 px"
          height="50 px"
            className="lapiz" onClick={handleShow}
            src="https://www.dosacordes.es/web/wp-content/uploads/2020/06/icono-lapiz.png"
            alt="Editar"
            
          ></img>{" "}
        </td>
        <td>
          {" "}
          <img
          width="50 px"
          height="50 px"
            className="x" onClick={eliminar}
            src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_prodpictxmark_1484336297-1.png"
            alt="Borrar"
         
          ></img>{" "}
        </td>
        <td>{movimiento.tipoMovimiento}</td>
        <td>{movimiento.Nombre}</td>
        <td>
          <div className={movimiento.tipoMovimiento}>{formatterPeso.format(movimiento.Cantidad)}</div>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tipo de movimiento</Form.Label>
            <Form.Control
              as="select"
              name="tipoMovimiento"
              onChange={handleInputUpdate}
            >
              <option value={movimientoeditado.Type}>{movimientoeditado.tipoMovimiento}</option>
              <option value={auxMov}>{auxMov}</option>
            </Form.Control>
          </Form.Group>
          <Form.Label>Nombre</Form.Label>
          <InputGroup className="mb-3">
           
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="Nombre"
              value={movimientoeditado.Nombre}
              onChange={handleInputUpdate}
            />
          </InputGroup>
          <Form.Label>Cantidad</Form.Label>
          <InputGroup className="mb-3">
       
            <Form.Control
              placeholder="Cantidad"
              name="Cantidad"
              type="number"
              value={movimientoeditado.Cantidad}
              onChange={handleInputUpdate}

            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={ editar}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>

        </>

    )
}