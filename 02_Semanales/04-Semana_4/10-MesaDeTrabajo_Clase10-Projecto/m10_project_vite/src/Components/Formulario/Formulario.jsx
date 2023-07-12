import React from 'react'
import estilo from './Form.module.css'


const Formulario = ({setUsuario}) => {

    return (
        <div className={estilo.form}>
            <label > Nombre: </label> 
            <input type="text" onChange={(e) => setUsuario((usuario) => ({...usuario, nombre: e.target.value}))}/>

            <label > Profesion: </label> 
            <input type="text" onChange={(e) => setUsuario((usuario) => ({...usuario, profesion: e.target.value}))}/>

            <label > Matricula: </label> 
            <input type="text" onChange={(e) => setUsuario((usuario) => ({...usuario, matricula: e.target.value}))}/>
        </div>
    )
    }

export default Formulario