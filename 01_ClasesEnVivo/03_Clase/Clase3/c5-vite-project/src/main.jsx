import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( // en ves de crear una variable, lo hace todo en una linea
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
