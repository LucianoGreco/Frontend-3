import { useState } from 'react'
//import './Card.css'
import estilo from './Card.module.css' // estilo = Card.module.css


const Card = ({menu, setCart, cart}) => {

  const [counter, setCounter] = useState(0) // useState(0) Valor Inicial depende de la variable
  let contador = 0 

  const {img, tipo, precio} = menu // Desectructurado 
  //console.log(menu.tipo)
  //console.log(tipo)


// Funciones
  const sumar = () => {
    setCounter(counter + 1) // No counter++ por que es una constante
  }

  const restar = () => {
    setCounter(counter - 1) 
  }


  return (
    <div className={estilo.card}>     

      <img className={estilo.cardImg} src={img} alt="" />
      <h4>{tipo}</h4>
      <h5>{precio}</h5>
      <div className={estilo.botones}>
        <button disabled={counter === 0} onClick={restar}>-</button>  
        <h5 style={{margin: '10px'}}>{counter}</h5>
        <button onClick={sumar}>+</button>
      </div>

  {/* const [cart, setCart] = useState([Array]) */}
      <button onClick={() => setCart([...cart, menu])}>Agregar al carrito</button>

    </div>
  )
}
export default Card

// MINUTO: 16:39