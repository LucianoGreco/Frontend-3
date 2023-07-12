import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Cart from './Components/cart'
import { useState } from 'react'
import Form from './Components/form'

function App() {

  const [cart, setCart] = useState([]) 

  return (
    <>
      <Navbar/>
      {/* <Home cart={cart} setCart={setCart}/> */}
      <Home setCart={setCart}/>
      <Cart cart={cart}/> 
      <Form/>
    </>
  )
}

export default App

// cd 07_Clase/c7-vite-project-main
// npm run dev
