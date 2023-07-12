import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ClassComponent from './Components/ClassComponent'
import Cart from './Components/cart'
import { useState } from 'react'

function App() {

  //Estado: Guarda informacion
  const [cart, setCart] = useState([]) // Valor inicial un Array

  return (
    <>
      <Navbar/>
      <Home cart={cart} setCart={setCart}/>
      <Cart cart={cart}/> 
      {/* <ClassComponent/> */}
    </>
  )
}

export default App

// cd 07_Clase/c7-vite-project-main
// npm run dev
