import Movimiento from "./Movimiento"
import React, { useEffect, useState } from "react";


export default function Movimientos ({movimientos}){

    const [Contador, setContador] = useState(Movimientos.length); //use state es delcrar un variable , primera parte de la llave es el nombre de la variable y el segundo valor es el metodo para asignarle un valor 
    //use state le dice con que valor va a iniciar
    const [Busqueda, setBusqueda] = useState("");
    const [filtrob, setfiltrob] = useState([]);

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
        setfiltrob(filtro);
        setContador(filtro.length);
    }, [movimientos,Busqueda]);

    const handleChangeInput = (e) => {
        setBusqueda(e.target.value);
      };
    
    return(
        <>

        {Contador} 
        <table className="table tabla">
            {filtrob.map((movimiento) => (
              <Movimiento
                movimiento={movimiento}
                
              />
            ))}
          </table>

            <input value ={Busqueda}  onChange={handleChangeInput} type ="text" placeholder="Busqueda"/>
            

        </>

        

    )
}