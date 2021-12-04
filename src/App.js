import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import Movimientos from "./components/Movimientos";
import Movimiento from "./components/Movimiento";


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

  }, [movimientos, saldoInicial, setMovimientos]);


  console.log (movimientos);
  return (

    
    <div className="App">
    <Form addmovimiento={addmovimiento} saldoFinal={saldoFinal}/> 
    <Movimientos movimientos={movimientos}/>

    <input onChange= {((e)=>setsaldoInicial(e.target.value))} value={saldoInicial} type="number" placeholder="Saldo inicial"/>
    <input value={saldoFinal} disabled placeholder="Saldo final"/>
    
    
        
    </div>
  );
}

export default App;
