// rafce
import React from 'react'
import Hijo from './hijo'

const Padre = (props) => {
    console.log(props)// {}
    console.log(props.children)// {}
    return (
        <div>
            <h1>Componente Padre</h1>
            <Hijo/>
            {props.children} {/*Renderiza los elementos Children del Padre*/}
        </div>

    )
}
export default Padre
