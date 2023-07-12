import React from 'react'
import { pastas } from '../menues'
import Card from './Card/Card'
import { styled } from 'styled-components'  

const Pastas = ({setCart}) => {

    return (
        <Container>
            <h1 >Lista de Pastas</h1>
            {pastas.map(pasta => <Card setCart={setCart} key={pasta.id} menu={pasta}/>)}
        </Container>
    )
}

export default Pastas

const Container = styled.div` 
    margin-top: 40px;
    background-color: blue;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`