import React from 'react'
import { pizzas } from '../menues'
import Card from './Card/Card'
import { styled } from 'styled-components' 


const Pizzas = ({setCart}) => {

  return (
    <Container>
        <h1 >Lista de Pizzas</h1>
        {pizzas.map(pizza => <Card setCart={setCart} key={pizza.id} menu={pizza}/>)}
    </Container>
  )
}
export default Pizzas

const Container = styled.div` 
  margin-top: 40px;
  background-color: blue;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

