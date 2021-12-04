import Movimiento from "./Movimiento"

export default function Movimientos ({movimientos}){

    return(
        <>
        <table className="table tabla">
            {movimientos.map((movimiento) => (
              <Movimiento
                movimiento={movimiento}
                
              />
            ))}
          </table>
        </>

    )
}