import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParentComponet from './components/props.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Archivo Render: main.jsx</h1>
    <App />
    <ParentComponet/>
  </React.StrictMode>,
)
