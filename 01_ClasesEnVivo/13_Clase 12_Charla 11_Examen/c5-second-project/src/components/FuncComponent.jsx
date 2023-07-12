// rafce
import React, { useEffect, useState } from 'react'
/* 
useEffect(() => { 
    a. componentDidMount() - Componente montado
    b. componentDidUpdate() - Componente actualizado (ejecuta en el comienzo y cuando actualiza)
    c. componentWillUnmount() - Componente montado 
},[objeto]
*/

const FuncComponent = () => {
    console.log('1. Funcion: Se ejecuta la primera parte')

    const [usuario, setUsuario] = useState({
        nombre: 'Luciano',
        edad: 31
    })

    const [carga, setCarga] = useState(true)
    
    useEffect(() => { // Componente montado
        console.log('2. Funcion: Se monta el componente')
        return () => {
            console.log('5. Funcion: Se desmonta el componente') // Componente desmontado
            setUsuario({
                nombre:'Sin nombre',
                edad: 0
            })
        }
    },[])

    useEffect(() => { // Componente actualizado 
        console.log('3. Funcion: Se actualiza el estado del usuario')
        setCarga(true) 
        setTimeout(()=>{
            setCarga(false) // Vuelve a la primera etapa
        },2000) // 2 Segundo
    },[usuario])

    return (
        <div>
            {carga ? 'Cargando...' : 
                <>
                    {console.log('4. Funcion: Se ejecuta el render')}
                    <h1>Componente de Funcion</h1>
                    <h2>{usuario.nombre}</h2>
                    <button 
                        onClick={() => setUsuario({...usuario, nombre: 'Celeste'})}
                        >Cambiar Nombre</button>
                </>
            }
        </div>
    )
}

export default FuncComponent