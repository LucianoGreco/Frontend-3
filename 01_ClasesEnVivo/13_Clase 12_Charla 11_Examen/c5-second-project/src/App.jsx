import { useState } from 'react'
import './App.css'

import FuncComponent from './components/FuncComponent'
import ClassComponent from './components/classComponent'

function App() {
  const [alternar, setAlternar] = useState(false) // toggle: Alternar

  return (
    <>
    {alternar ? <ClassComponent/> : <FuncComponent/>}
    <button
      onClick={() => setAlternar(!alternar)}
    >Cambiar al componente de {alternar ? 'Funcion' : 'Clase'}</button>
    </>
  )
}

export default App