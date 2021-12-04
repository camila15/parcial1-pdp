import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import Movimientos from "./Movimientos";
export default function Form ({addmovimiento,saldoFinal}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Mensaje, setMensaje] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [movimiento, setMovimiento] = useState({
        id:"",
        tipoMovimiento: "Tipo de movimiento",
        Nombre: "",
        Cantidad: null,
      });

      const cambiarmovimiento = (e) => { // metodo que cambia los valores del objeto 
        setMovimiento({ ...movimiento, [e.target.name]: e.target.value });
      };

      


      const agregarmovimiento = () => { // metodo que cambia los valores del objeto 

        if(movimiento.Nombre.trim() && movimiento.Cantidad>0) {

            if(movimiento.tipoMovimiento==="Gasto" && movimiento.Cantidad>saldoFinal)
            {
                setTitulo("Error")
                setMensaje("No cuenta con saldo suficiente para realizar este movimiento")
                setShow(true);
                
            }

            else {
                setTitulo("Movimiento agregado")
                setMensaje("Se realizó la operación y se agregó el movimiento")
                setShow(true);
                addmovimiento({ ...movimiento, id:uuidv4() }); //id del movimiento
                

            }

           

        }
        else {

            alert("El formulario está mal diligenciado")
        } 
        
      };

      const cancelarmovimiento = (e) => { // metodo que cambia los valores del objeto 
        setMovimiento({ ...movimiento, Nombre: "", Cantidad: 0, tipoMovimiento: "Tipo de movimiento" });
      };

return (
    <>
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{Titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>{Mensaje}</p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
          </Button>
            </Modal.Footer>
          </Modal>

         
   <div class="form-group form row">
              <div className="col-6 label">
                <label for="TipoMovimiento" className="labelp">
                  Tipo de movimiento
                </label>
              </div>
              <div className="col-6 ">
                <select
                  class="form-control"
                  id="TipoMovimiento"
                  name="tipoMovimiento"
                  value={movimiento.tipoMovimiento}
                  onChange={cambiarmovimiento}
                >
                  <option value="Tipo de movimiento" selected>
                    Tipo de movimiento
                  </option>
                  <option value="Ingreso">Ingreso</option>
                  <option value="Gasto">Gasto</option>
                </select>
              </div>
            </div>
    <div> Nombre</div>
    <input value={movimiento.Nombre} onChange={cambiarmovimiento} name="Nombre" placeholder="Digite nombre"/>
    <div> Cantidad</div>
    <input type="number"value={movimiento.Cantidad} onChange={cambiarmovimiento} name="Cantidad" placeholder="Digite cantidad"/>
    <input onClick={agregarmovimiento} type="button" value="Agregar movimiento" />
    <input onClick={cancelarmovimiento}type="button" value="Cancelar" />
      </>
)

}