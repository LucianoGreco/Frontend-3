import React, { useEffect, useState } from 'react'

const Pizza = () => {

    const [pedido, setPedido] = useState(true)
    const [carga, setCarga] = useState(true)


    useEffect(() => { 
        return () => {
            pedido ? console.log('Se cancelo el pedido') :
            console.log('Se acepto el pedido')
        }
    },[pedido])


    useEffect(() => { 
        console.log('Actualizando el componente')
        setCarga(true)
        setTimeout(()=>{
            setCarga(false) 
        },2000)
    },[pedido])


    return (
        <div>
            {carga ? 'Cargando...' : 
                <>
                    {pedido ? 
                        <div>
                            <h2>Pedido Aceptado!✅</h2>
                            <h3>Pizza 🍕</h3>
                            <button
                                onClick={() => setPedido(!pedido)}
                                    >Cancelar Pedido</button>
                        </div>
                    : 
                        <div>
                            <h2>Perdido Cancelado!❌</h2>
                            <h3>😌👎🏻</h3>
                            <button
                                onClick={() => setPedido(!pedido)}
                                    >Volver a Pedido</button>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Pizza