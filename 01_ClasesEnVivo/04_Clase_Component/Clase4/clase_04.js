/* # CREAR PROYECTOS CON REACT:
.   CRA: Create-React-App
.   VITE: Create Vite

# PARA CREAR UN PROYECTO ES NECESARIO TENER INSTALADO:
a. Node.js - Entorno de ejecucion de JavaScript (Lado Backend)
.   Verificar instalacion: node -v
.   Recomendado: version 12+ ( Actualizar)

b. npm (Node Package manager) - Se encarga de gestionar los paquetes de node 
.   Verificar instalacion: npm -v
.   Recomendado: version 5.2+


# ARCHIVOS PRINCIPALES:
CRA:
.   index.html
.   index.js

VITE
.   index.html
-   main.jsx
*/



/*
# IMPORTANCION Y EXPORTACION
Importar: los archivos o elementos que vamos a usar en el archivo donde vamos a trabajar 
.   import './App.css'; 
Exportar: Los elementos y componentes del archivo donde trabajamos, para poder conectarnas con otros archivos 
.   export default App;


1. EXPORTAR
a. COMPONETE DE CLASE
    export default class ExportDefaultClass extends Component {…} // Componente de Clase
    export class ExportClass extends Component {…) // Componente de Clase

b. COMPONENTE DE FUNCION
    export default ExportDefaultFunc // Componente de Fucncion
    export const ExportFunc = () => {…} // Componente de Fucncion



2. IMPORTAR
    import ExportDefaultClass, { ExportClass } from './components/ClassComponent' 
    import ExportDefaultFunc, { ExportFunc } from './components/FunctionComponent'
    function App() {
        return (
            <>
                <ExportDefaultClass/>  
                <ExportDefault/>
                <ExportDefaultFunc/>
                <ExportFunc/>
            </>
        )
    }
*/


/*
# QUE ES UN COMPONENTE
Son elementos autonomos que se pueden reutilizar en una pagina
Son como elementos html con la diferencia que se les puede ingresar informacion para luego trabajar con ella


# Existen dos tipos de componentes:
a.	Componente de clase
b.	Componente de funciones


# Creando componentes
Dentro de src creamos archivos de componentes

.   > src
.   >   > componentes
.   >   >   > a. ClassComponent.jsx
.   >   >   > b. FunctionComponent.jsx


# ES7 - ATAJOS
.	Componente de Clase
.		rcc (reactClassComponen):------------------- class App extends Component {

.	Componente de Funcion
.		rfce (reactFunctionalComponent):------------ function App() {
.       rafce (reactArrowFunctionExportComponent):-- const App = () => {
*/


/*
A.  COMPONENTE DE CLASE - rcc reactClassComponen
.       Se utiliza como modelo para crear objetos
.       Las clases comienzan con Mayusculas

.   Contienen:
.       a.  Constructor
.       b.  super
.       c.  this


    export default class ExportDefaultClass extends Component { // Sintaxis
        render() {
            return(
                <div>App</div>
            )
        }
    }
*/


/*
B.  COMPONENTE DE FUNCION - rfce // reactFunctionalComponent

    function ExportDefaultFunc() { // Sintaxis
        return (
            <div>App</div>
        )
    }
    export default App



.   COMPONENTE DE ARROW FUNCION – rafce // reactArrowFunctionExportComponent

    const ExportDefaultFunc = () => { // Sintaxis
        return (
            <div>App</div>
        )
    }
    export default App
*/



/*
# ¿QUE SON LAS PROPS?

Clase: Component

Metodos: 
.   render() Retorna elementos html
.   this.
.   props.  Pasa informacion del componente padre al componente hijo 
.	        Se pueden guardar en una variable y modificarce

*/



/*
+--------------------------------------+
| ClassComponent.jsx - Componente Hijo |
+--------------------------------------+
    import React, { Component } from "react"; // Convierte la clase en un componente de claes

    export default class ExportDefaultClass extends Component { // Sintaxis
        render() {

            let {info, amount} = this.props // Destructurar: Evita colocar this.props.info en cada invocacion 
            return( // Retorna html
                <>
                    <h2>Sueldo {info}: $ {amount}</h2>
                </>
            )
        }   
    }
*/



/*
+----------------------------------------+
| FunctionComponen.jsx - Componente Hijo |
+----------------------------------------+
const ExportDefaultFunc = ({info, amount}) => { // Por convencion usamos props pero puede ir cualquier parametro
    return(
        <>
            <h2>Beca {info}: $ {amount*2}</h2>
        </>
    )
}
export default ExportDefaultFunc


+--------------+
| funciones.js |
+--------------+
    export const Presupuesto = () => { // export sin default
        return "Presupuesto 2023"
    }
*/



/*
+---------+
| App.jsx |
+---------+
import './App.css'
import ExportDefaultClass from './components/ClassComponent' 
import ExportDefaultFunc from './components/FunctionComponent'
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



/*
// Proyecto: cd 04_Clase/Clase4/vite-project-clase4
// npm run dev

# Buscar un dato en Array
    let arr = [1,2,3,4]
    let [a,b,c,d] = arr
    console.log(c) // 3
*/



/*
+-----------+
| props.jsx |
+-----------+

    export const ChildComponent = (props) => { // COMPONENTE HIJO - Recibe la informacion mediante el objeto 'props'
        return(
            <div className="child">
                <h3>Total: {props.salario}</h3> {/*recibe el salario y lo multiplica por 6}
            </div>
        )
    };
        
    export const ParentComponet = () => { // COMPONENTE PADRE
        const presupuesto = 200000; // declaro la variable y la inicializo
            return (
                <div className="parent">
                    <h1>Argentina</h1>
                    {/* <ChildComponent salario={100000}/> paso la informacion directamente en la propiedad }
                    <ChildComponent salario={presupuesto}/> {Le paso la variable como propiedad }
                </div>
            )
        };
    export default ParentComponet;
*/    




/*
+----------+
| main.jsx |
+----------+
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    import ParentComponet from './components/props.jsx'
        
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
            <ParentComponet/>
        </React.StrictMode>,
    )

*/