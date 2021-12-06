import Movimiento from "./Movimiento"
import React, { useEffect, useState } from "react";


export default function Movimientos ({movimientos,eliminarapp,editarapp}){

    const [Contador, setContador] = useState(Movimientos.length); //use state es delcrar un variable , primera parte de la llave es el nombre de la variable y el segundo valor es el metodo para asignarle un valor 
    //use state le dice con que valor va a iniciar
    const [Busqueda, setBusqueda] = useState("");
    const [filtrob, setfiltrob] = useState([]);
    const [Filtroradio, setfiltro] = useState("Todos");

    useEffect(() => 
    {
        let filtro=[]
        if (Busqueda!=="" || Busqueda!==" ")
        {
            filtro=movimientos.filter((movimiento)=>movimiento.Nombre.includes(Busqueda))
        }
        else 
        {
            filtro=[...movimientos]
        }

        if(Filtroradio === "Ingreso")
        {
            filtro=filtro.filter((movimiento)=> movimiento.tipoMovimiento==="Ingreso")
        }

        if(Filtroradio === "Gasto")
        {
            filtro=filtro.filter((movimiento)=> movimiento.tipoMovimiento==="Gasto")
        }

        setfiltrob(filtro);
        setContador(filtro.length);
    }, [movimientos,Busqueda,Filtroradio]);

    const handleChangeInput = (e) => {
        setBusqueda(e.target.value);
      };

      const handleChangeInputradio = (e) => {
        setfiltro(e.target.value);
      };

      
    
    return(
        <>

        {Contador} 
        <table className="table tabla">
            {filtrob.map((movimiento) => (
              <Movimiento 
                movimiento={movimiento}
                eliminarapp={eliminarapp}
                editarapp={editarapp}
                
              />

            ))}
          </table>

           
          <input value ={Busqueda}  onChange={handleChangeInput} type ="text" placeholder="Busqueda"/> 

          <label>Todos</label>
          <input type="radio" value="Todos" onChange={handleChangeInputradio} name="filtros" placeholder="Todos"/>
          <label>Ingresos</label>
          <input type="radio" value="Ingreso" onChange={handleChangeInputradio} name="filtros" placeholder="Ingresos"/>
          <label>Gastos</label>
          <input type="radio" value="Gasto" onChange={handleChangeInputradio} name="filtros" placeholder="Gastos"/>
        </>


        

    )
}