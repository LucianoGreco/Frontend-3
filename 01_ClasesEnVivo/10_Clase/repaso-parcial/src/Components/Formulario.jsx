import React from 'react'


// const [pesca, setPesca] = useState({}) -------- Estado
// ...pesca (estadoPrevio) ----------------------- Trae el estado actual 
// ...pesca, lugar: e.target.value: -------------- Al estado previo, modificale lugar

const Formulario = ({setPesca, setEstilo}) => {
    return (
        <div className='Formulario'>
            <label >Lago: </label>
            <input type="text" onChange={(e) => setPesca((pesca) => ({...pesca, lugar: e.target.value}))} />

            <label >Fecha: </label>
            <input type="date" onChange={(e) => setPesca((pesca) => ({...pesca, fecha: e.target.value}))}/>
            
            <label >Pescador: </label>
            <input type="text" onChange={(e) => setPesca((pesca) => ({...pesca, persona: e.target.value}))}/>
        
            <label >Fondo: </label>
            <select onChange={(e) => setEstilo((estilo) => ({...estilo, background: e.target.value}))}>
                <option value="transparent">transparen</option>
                <option value="black">black</option>
                <option value="yellow">yellow</option>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="orange">orange</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
        
            <label >Color de letra: </label>
            <select onChange={(e) => setEstilo((estilo) => ({...estilo, color: e.target.value}))}>
                <option value="white">white</option>
                <option value="black">black</option>
                <option value="yellow">yellow</option>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="orange">orange</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>

        </div>
    )
}

export default Formulario