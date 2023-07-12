import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Hijo from './Components/hijo'
import Padre from './Components/Padre'

function App() {


  return (
    <>
      <Padre> {/*Elementos Children*/}
        <h1>Elementos Children del padre</h1>
        <ul>
          <li>Elemento1</li>
          <li>Elemento2</li>
          <li>Elemento3</li>
        </ul> 
      </Padre> 

      {/* <Padre/> */}
      <Hijo/>
      
      {/* <Navbar/>
      <Home/> */}
    </>
  )
}

export default App

// cd 06_Clase/c6-vite-project-main


