import React from 'react'

// fecha
// lugar
// persona

const Tarjeta = ({pesca, estilo}) => {

  // const estilos = {backgraund: estilo.backgraund, color: stylo.color}

  return (
    <div className='Tarjeta' style={estilo}>
        <h2>🎣 Pezca</h2>
        <h3>🏞 Lago: {pesca.lugar}</h3> 
        <h3>🌞 Fecha: {pesca.fecha} - 19hs</h3>
        <h3>✅ Confirma: {pesca.persona}</h3>
    </div>
  )
}

export default Tarjeta