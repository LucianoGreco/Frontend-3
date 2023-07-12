import React from 'react'
import estilo from './Card.module.css'



const Card = ({usuario}) => {

    const {nombre, profesion, matricula} = usuario // Desestructuracion de props

    return (
        <div className={estilo.card}>
            <h2>USUARIO 😎</h2>
            <h4>✅Nombre: {nombre}</h4>
            <h4>✅Profecion: {profesion}</h4>
            <h4>✅Mat. N°: {matricula}</h4>
        </div>
    )
}
export default Card