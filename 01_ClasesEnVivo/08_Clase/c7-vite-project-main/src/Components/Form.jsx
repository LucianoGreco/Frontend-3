import React, { useState } from 'react'

const Form = () => {

    const [nombre, setNombre] = useState('') // String
    const [direccion, setDireccion] = useState('') // String
    const [show, setShow] = useState(false) // boolean
    const [error, setError] = useState(false) // boolean

    const handleSubmit = (event) => {
        event.preventDefault() // se utiliza para detener el comportamiento predeterminado de un evento
        //alert('Nombre: '+ nombre + '\nDireccion: ' + direccion)
        if(nombre.length > 3 && direccion.length > 3 ){
            setShow(true)
            setError(false) //Quita el cartel 'Verifique su informacion'
        } else {
            setError(true)
        }
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Nombre: </label>
                <input type="text" onChange={(event) => setNombre(event.target.value)} />
                <label > Direccion: </label>
                <input type="text" onChange={(event) => setDireccion(event.target.value)} />
                <button>Mandar Pizza</button>

                {error && 'Verifique su informacion'} {/* error ? 'Verifique bien su informacion' : null  */}

            </form>

            {show ?
                <>
                    <h3>Muchas Gracias, {nombre}! 😉👍</h3>
                    <h3>🍕 Estamos enviando la pizza a {direccion}.</h3>
                </>
                :
                null
            }


        </div>
        //Ternario: Condicion ?  true : false
        //          Condicion && true : false
    )
}

export default Form

// MINUTO 10:43 Clase 8.B