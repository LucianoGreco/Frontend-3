import React from 'react'
import cardStyle from './Card.module.css'

const Card = ({menu}) => {

  return (

    // Estilo de la Tarjeta
    <div className={cardStyle.card} >
        <img className={cardStyle.cardImg} src={menu.img} alt="" />
        <h4>{menu.tipo}</h4>
        <h5>{menu.precio}</h5>
    </div>
  )
}

// {pizzas.map(pizza => <Card key={pizza.id} menu={pizza}/>)}

export default Card