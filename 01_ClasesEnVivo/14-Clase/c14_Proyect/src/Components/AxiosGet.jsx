import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosGet = () => {

     // ESTADOS
    const [gato, setGato] = useState([{}])

    // ENDPOINT
    const url = 'https://api.thecatapi.com/v1/images/search'


    useEffect( () => {
        axios(url).then((respuesta) => setGato(respuesta.data))
    }, [])

    //console.log(gato[0].url)
    console.log(gato[0]?.url)
// RENDERIZADO
    return (
        <div>
            {/* {gato && <img src={gato[0]?.url} alt="" />} */}
            <img src={gato[0].url} alt="" /> {/* useState([{}]) */}
        </div>
    )
}

export default AxiosGet

/* Instalacion de AXIOS
1. npm install axios

axios.get = axios
axios.post
axios.delete








*/