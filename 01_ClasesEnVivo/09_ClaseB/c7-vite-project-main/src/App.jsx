import './App.css'
import Pizzas from './Components/Pizzas'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import { useState } from 'react'
import Form from './Components/form'
import Pastas from './Components/Pastas'

function App() {

  const [cart, setCart] = useState([]) 

  return (
    <>
      <Navbar/>
      <Pizzas setCart={setCart}/>
      <Pastas setCart={setCart}/>
      <Cart cart={cart}/> 
      <Form/>
    </>
  )
}

export default App

// cd 07_Clase/c7-vite-project-main
// npm run dev
