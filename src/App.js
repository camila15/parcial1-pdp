import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import Movimientos from "./components/Movimientos";
import Movimiento from "./components/Movimiento";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [saldoInicial, setsaldoInicial] = useState(0);
  const [saldoFinal, setsaldoFinal] = useState(0); 
  

  const addmovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento]); // agrega un movimiento

  };

  useEffect(() => {
    let Calculo = 0;
    Calculo = saldoInicial;
    movimientos.map((movimiento) => {

      if (movimiento.tipoMovimiento === "Gasto") {
          
        Calculo = Calculo - movimiento.Cantidad;
      }
      else if (movimiento.tipoMovimiento === "Ingreso") {
        Calculo = parseInt(Calculo) + parseInt(movimiento.Cantidad);
      }

    });
    setsaldoFinal(Calculo)

  }, [movimientos, saldoInicial]);


  console.log (movimientos);

  const eliminarapp = (e) => {
    setMovimientos(movimientos.filter((movimiento)=>movimiento.id!==e))

  };

  const editarapp = (e) => {
   movimientos.map((movimiento)=>{ 

      if(movimiento.id===e.id)
      {
        movimiento.tipoMovimiento=e.tipoMovimiento
        movimiento.Nombre =e.Nombre
        movimiento.Cantidad=e.Cantidad
      }



   })
  };
  return (

    
    
    <div className="App">
    <Form addmovimiento={addmovimiento} saldoFinal={saldoFinal}/> 
    <Movimientos movimientos={movimientos}
    eliminarapp={eliminarapp}
    editarapp={editarapp}/>

    
  <div class="form-group form row">
    <div className="col-6 label" >
    <div>Saldo Inicial</div>
    <input onChange= {((e)=>setsaldoInicial(e.target.value))} value={saldoInicial} type="number" placeholder="Saldo inicial"/>
    <div>Saldo final</div>
    <input value={saldoFinal} disabled placeholder="Saldo final"/>
    </div>
    </div>
    
    
        
    </div>


  );
}

export default App;
