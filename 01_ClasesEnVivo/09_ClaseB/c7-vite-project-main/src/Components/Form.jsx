import React, { useState } from 'react'

const Form = () => {

    // const [nombre, setNombre] = useState('') // String
    // const [direccion, setDireccion] = useState('') // String
    const [cliente, setCliente] = useState({
        nombre:'',
        direccion:''
    })

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

    console.log(cliente) // {nombre: 'Luciano', direccion: 'Entre Rios 680'}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Nombre: </label>
                                                    {/* setNombre ahora pasa a setCliente */}
                <input type="text" onChange={(event) => setCliente({ ...cliente, nombre: event.target.value})} />
                <label > Direccion: </label>
                                                    {/* setDireccion ahora pasa a setCliente */}                
                <input type="text" onChange={(event) => setCliente({...cliente, direccion: event.target.value})} /> 
                <button>Mandar Pizza</button>

                {error && 'Verifique su informacion'} {/* error ? 'Verifique bien su informacion' : null  */}

            </form>

            {show ?
                <>
                    <h3>Muchas Gracias, {cliente.nombre}! 😉👍</h3>
                    <h3>🍕 Estamos enviando la pizza a {cliente.direccion}.</h3>
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