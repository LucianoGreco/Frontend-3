import { useState } from 'react'
import estilo from './Card.module.css'


// const Card = ({menu, setCart, cart}) => { // Evitar pasar cart
const Card = ({menu, setCart}) => {

  const [counter, setCounter] = useState(0) 
  let contador = 0 

  const {img, tipo, precio} = menu 

  const sumar = () => {
    // setCounter(counter + 1) 
    setCounter((prevCounter) => prevCounter +1) // prevCounter: valor previo del estado
  }

  const restar = () => {
    // setCounter(counter - 1)
    setCounter((prevCounter) => { // prevCounter: valor previo del estado
      return prevCounter -1
    })
  }


  const addCart = () => {
    const productoAgregado = {...menu, cantidad: counter}
    setCart((prevCart) => [...prevCart, productoAgregado]) // prevCart: evitamos enviar props de cart
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

      <button disabled={counter === 0} onClick={addCart}>Agregar al carrito</button>

    </div>
  )
}
export default Card

// MINUTO: 16:39