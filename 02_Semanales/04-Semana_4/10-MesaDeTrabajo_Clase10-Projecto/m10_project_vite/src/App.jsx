import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Formulario from './Components/Formulario/formulario'


function App() {

  const [usuario, setUsuario] = useState({
    nombre: '',
    profesion: '',
    matricula: null
  })

  return (
    <>
      <Formulario setUsuario={setUsuario}/>
      <Card usuario={usuario}/>
    </>
  )
}

export default App
