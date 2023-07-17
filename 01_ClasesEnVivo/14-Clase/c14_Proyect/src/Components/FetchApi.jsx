import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    //ENDPOINT
    const url = 'https://dog.ceo/api/breeds/image/random' // Endpoint: URL de una Api

    // ESTADOS
    const [perro, setPerro] = useState({})
    const [contador, setConstdor] = useState(0)

    useEffect( () => { // // Código que se ejecuta después del renderizado o cuando las dependencias cambian
        fetch(url).then( (respuesta) => {
            return respuesta.json()
        } ).then( (data) => {
            console.log(data)
            setPerro(data)
        })
    }, [contador])

    // RENDERIZADO
    return (
        <div>
            <img style={{objectFit: 'cover', width: '400px', height: '400px'}} src={perro.message} alt="" />
            <button onClick={ () => setConstdor(contador + 1)} >Cambiar Perro 🐶</button>
            <h4>Contador de Perritos: {contador}</h4>
        </div>
    )
}

export default FetchApi

/* NOTAS:

+ Fetch = Promesa
    . API (URL)
    . .then( () => {} )
        - respuesta
            - json()
        - data 

+ Axios 
    . Fetch
        - Api (URL)
        - Data (then)


*/