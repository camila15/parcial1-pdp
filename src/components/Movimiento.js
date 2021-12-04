export default function Movimiento ({movimiento}){
    const formatterPeso = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });
    return(
        <>
        <tr>
        <td className="columna">
          {" "}
          <img 
          width="50 px"
          height="50 px"
            className="lapiz"
            src="https://www.dosacordes.es/web/wp-content/uploads/2020/06/icono-lapiz.png"
            alt="Editar"
            
          ></img>{" "}
        </td>
        <td>
          {" "}
          <img
          width="50 px"
          height="50 px"
            className="x"
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
        </>

    )
}