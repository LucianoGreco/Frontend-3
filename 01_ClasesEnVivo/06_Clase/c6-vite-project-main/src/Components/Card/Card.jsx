import React from 'react'
//import './Card.css'
import estilo from './Card.module.css' // Creo una variable para convocar un estilo dentro de un modulo


const Card = ({menu}) => {
  console.log(estilo)
  
  return (

    <div className={estilo.card}>
        <img className={estilo.cardImg} src={menu.img} alt="" />
        <h4>{menu.tipo}</h4>
        <h5>{menu.precio}</h5>
    </div>
  )
}


export default Card


