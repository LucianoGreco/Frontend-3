import React from 'react'

const Form = ({usuario, setUsuario, handleSubmit}) => {


    // const handleChange = (e) => {
    //     setUsuario({
    //         ...usuario, // Estado previo: {nombre: '', color: ''}
    //         [e.target.name]: e.target.value // Se colocan los corchetes [] para que no genere Error
    //     })
    // }

    // # ESTADO PRECIO
    const handleChange = (e) => {
        setUsuario((usuarioPrevio) => {
            return {
                ...usuarioPrevio,
                [e.target.name]: e.target.value
            }
        })
    }

    console.log(usuario)

    return (
        <form onSubmit={handleSubmit}>
            <input name='nombre' type="text" onChange={handleChange}/>
            <input name='color' type="text" onChange={handleChange}/>
            <button >Enviar</button>
        </form>
    )
}

export default Form