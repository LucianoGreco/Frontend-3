import './App.css'
import ExportDefaultClass from './components/ClassComponent' 
import ExportDefaultFunc from './components/FunctionComponent'
import ChildComponent from './components/props';
import {Presupuesto} from './utils/funciones' // Importa un funcion


function App() {
  let sueldo = 150000;
  let alum = 'Alumno';
  
  return (
    <>
      <h1><Presupuesto/></h1>
      <ExportDefaultClass info='Directo' amount={sueldo}/>
      <ExportDefaultFunc info={alum} amount='50000'/>
    </>
  )
}
export default App

// cd 04_Clase/Clase4/vite-project-clase4
// npm run dev
