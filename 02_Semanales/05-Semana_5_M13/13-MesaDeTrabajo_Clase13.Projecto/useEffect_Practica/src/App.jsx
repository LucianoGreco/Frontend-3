import { useState } from 'react'
import './App.css'
import Pizza from './component/pizza'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pizza/>
    </>
  )
}

export default App
