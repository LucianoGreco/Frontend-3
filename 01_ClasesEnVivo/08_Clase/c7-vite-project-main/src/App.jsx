import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Cart from './Components/cart'
import { useState } from 'react'
import Form from './Components/form'

function App() {

  //Estado: Guarda informacion
  const [cart, setCart] = useState([]) // Valor inicial un Array

  return (
    <>
      <Navbar/>
      <Home cart={cart} setCart={setCart}/>
      <Cart cart={cart}/> 
      <Form/>
    </>
  )
}

export default App

// cd 07_Clase/c7-vite-project-main
// npm run dev
