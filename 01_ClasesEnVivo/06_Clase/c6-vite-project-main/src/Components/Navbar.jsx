import React from 'react'

// O1. Se crea en navar
const Navbar = () => {

  // a. Lista de Titulos
  let titulos = ['Home', 'Contact', 'About', 'Pizzas']



  return (
    // ESTILO OPCION 2  
      <div style={navbarStyle} >
        {titulos.map((titulo, index) => (
            <div key={index}> {/* key: Utiliza el index como clave o identificador del contenedor*/}
                <h4>{titulo}</h4>
            </div>
        ))}
    </div>
  )
}
export default Navbar

// Operacion ternaria:   ? true : false
let theme = true

    // b. Se coloca un estilo
    const navbarStyle = {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-around',
      boxShadow: '3px 5px 8px #000',
      borderRadius: '10px',

      // Operacion ternaria
      backgroundColor: theme ? 'white' : 'black',
      color: theme ? 'black' : 'white'

    }

