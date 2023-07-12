import { useState } from 'react'
import './App.css'
import Tarjeta from './Components/Tarjeta'
import Formulario from './Components/Formulario'

function App() {

  const [pesca, setPesca] = useState({ // Estado Universal
    lugar: '',
    fecha: 'null',
    persona: ''
  })

  const [estilo, setEstilo] = useState({
    background: 'transparent',
    color: 'white'
  })

  return (
    <div className='App'>
      <Formulario setPesca={setPesca} setEstilo={setEstilo}/>
      <Tarjeta pesca={pesca} estilo={estilo}/>
    </div>
  )
}

export default App