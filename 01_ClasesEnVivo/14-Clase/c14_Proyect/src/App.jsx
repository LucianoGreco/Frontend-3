import { useState } from 'react'
import './App.css'

import AxiosGet from './Components/AxiosGet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchApi/> */}
      <AxiosGet/>
    </>
  )
}

export default App
 
