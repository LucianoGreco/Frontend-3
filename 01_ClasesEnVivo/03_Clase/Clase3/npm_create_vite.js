/* # CREAR PROYECTOS CON REACT:
.   CRA: Create-React-App
.   VITE: Create Vite


# PARA CREAR UN PROYECTO ES NECESARIO TENER INSTALADO:
----------------------------------------------------
a. Node.js - Entorno de ejecucion de JavaScript (Lado Backend)
.   Verificar instalacion: node -v
.   Recomendado: version 12+ ( Actualizar)

b. npm (Node Package manager) - Se encarga de gestionar los paquetes de node 
.   Verificar instalacion: npm -v
.   Recomendado: version 5.2+


2. # ARCHIVOS PRINCIPALES:
>   public
>	>   index.html 
        // <body>
        //     <div id="root"></div>
        // </body>


>   src
>	>   index.js 
        // const root = ReactDOM.createRoot(document.getElementById('root'));


/* VITE: Create Vite
Es una plantilla de proyecto que puedes utilizar con NPM para crear rápidamente una aplicación web moderna basada en Vue.js o React

.   npm create vite:  Descargará y configurará automáticamente una estructura de proyecto básica para ti



#. INSTALACION:
---------------
1.	cd /Desktop/Frontend_3/03_Clase/Clase3 
2.	npm create vite
3.	√ Project name: c5-vite-project
4.	√ Select a framework: » React
5.	√ Select a variant: » JavaScript

# LIBRERIAS FALTANTES
----------------------
> node_modules 
> package-lock.json
> package.json:
.   dependencias: Librerias propias de Reack
.   Devdependencias: Librerias agregadas por el desarrollador

# INSTALAR LAS LIBRERIAS FALTANTES
----------------------------------
6.  cd c5-vite-project
7.  npm i / npm install - Instala o actualiza las librerias
8.  npm run dev              

.       VITE v4.3.9  ready in 1133 ms
.       ➜  Local:   http://localhost:5173/  - Terminal: o (Abre) / u (Cierra) el Localhost
.       ➜  Network: use --host to expose
.       ➜  press h to show help




# ARCHIVOS PRINCIPALES:
-----------------------
Index.html
	// <body>
    // 		<div id="root"></div>
    // 		<script type="module" src="/src/main.jsx"></script> 
	// </body>

main.jsx
	// ReactDOM.createRoot(document.getElementById('root')).render( // Captura y renderiza en una linea
 	// 		<React.StrictMode>
    // 			<App />
  	// 		</React.StrictMode>,
	// )




# ARCHIVOS Y DIRECTORIO DE VITE
------------------------------
a) node_modules: Contiene todas las bibliotecas y paquetes de software de terceros que tu proyecto necesita para funcionar.


public: React contiene los archivos estáticos que se utilizarán al construir y ejecutar tu aplicación
.       favicon.ico
.	    index.html: Este archivo es el punto de entrada de tu aplicación React
.	    logo192.png
.	    logo512.png
.	    manifest.json
.	    robots.txt


b) src: Contiene la mayor parte del código fuente de tu aplicación. Aquí se encuentran los componentes de React, Archivos JavaScript, Archivos CSS o estilos, archivos de imagen y otros recursos necesarios tu aplicación
.	    App.css
.	    App.js
.	    App.test.js
.	    index.js
.	    logo.svg
.   	reportWebVitals.js
.   	setupTests.js


c) .gitignore: Especifica los archivos y directorios que deben ser ignorados y no deben ser rastreados por el control de versiones


d) package-lock.json: 
Este archivo se utiliza para asegurar que todas las personas que trabajen en el proyecto tengan las mismas versiones de las dependencias instaladas, evitando problemas de compatibilidad.
Se actualiza automáticamente cada vez que se agregan, eliminan o actualizan las dependencias del proyecto garantizando que todos trabajen con las mismas versiones de dependencia
Contiene informacion detallada sobre las dependencia que el proyecto necesita
.    	name:
.	    version
.	    dependencias
.   	arbol de dependencia y como estas se relacionan


e) package.json: 
Contiene la informacion del proyecto como dependencias requeridas, los comandos personalizados y la configuración específica
.	    Nombre del proyecto
.	    Version del proyecto
.	    Dependencia
.	    Script: Permite definir comandos personalizados en el archivo package.json que te permiten ejecutar. Ej: ejecutar pruebas
.	    Autor y licencia
.   	Configuración de webpack


f) README.md: archivo de texto que contiene información y documentación sobre tu proyecto. 
Proporciona una descripción del proyecto, instrucciones de instalación, detalles sobre el uso y ejemplos, información sobre la colaboración y la licencia. 
Recurso para que desarrolladores comprendan y utilicen tu proyecto de Reac



#. DIFERENCIAS ENTRE CRA Y VITE
-------------------------------
1)
CRA: c5-vite-project/public/index.html
VITE: c5-vite-project/index.html: // Aparece al mismo nivel que public, src, package.json etc.


2)
CRA: package.json: Testin ya configurado
.       {    
.       "@testing-library/jest-dom": "^5.16.5",
.       "@testing-library/react": "^13.4.0",
.       "@testing-library/user-event": "^13.5.0",
.       }

VITE: package.json: Tenemos que configurar el testing
.       {
.	        // @Testing...
.       }


3)
a) CRA: Index.html (Mas lineas de codigo)
------------------
.		7.  <meta name="theme-color" content="#000000" />
.		8.  <meta
.		9.  name="description"
.		10. content="Web site created using create-react-app"
.		11. />
.		12. <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
.		13. <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
.
.		17. <noscript>You need to enable JavaScript to run this app.</noscript>

b) VITE: Index.html (Menos lineas de codigo)
-------------------
.		12. <script type="module" src="/src/main.jsx"></script> 
.				Reemplaza al index.js 
.         		En CRA, los archivos .js o .jsx los reconoce igual
.         		En VIRE Si devolvemos elementos html o componetnes tiene que ser .jsx 


4)
# CRA: Index.js 

	// const root = ReactDOM.createRoot(document.getElementById('root')); // Captura root en una variable

	// root.render( // rederiza la variable
 	// 	<React.StrictMode>
    // 		<App />
  	// 	</React.StrictMode>,
	// );


# VITE: main.jsx*/

	// ReactDOM.createRoot(document.getElementById('root')).render( // Captura y renderiza en una linea
 	// 	<React.StrictMode>
    // 		<App />
  	// 	</React.StrictMode>,
	// )
/*


5).
# CRA: App.js

	// function App() {
	//   	return (
	//     			<div className="App"> // Se utiliza className ya que class es una palabra reservada de JS
	// 					Codigo…
	//     			</div>


# VITE: App.jsx

	// function App() {
	//   	const [count, setCount] = useState(0)

	//   	return (
	//       		<>  // Fragment: Etiqueta padre
	//       			Codigo…
	//     			</>
	//   	)


6)
CRA: 260Mb
VITE: 58,9 Mb (Mas liviano)



# HERRAMIENTAS QUE VAMOS A UTILIZAR
a.	Webpack
b.	EsLint
c.	Jest
d.	@testing-library
e.	Fragment
f.	Children


a. Wenpack: Empaquetador de modulos. 
Convierte todos los modulos en un archivo estatico distribuible y comprimido legible para el navegador web

	.js .jpg .css .png .jpg .css .js .png
	png .jpg .css .js .png .js .jpg .css 
	.js .jpg .css .png .jpg .css .js .png
	png .jpg .css .js .png .js .jpg .css 

Wenpack = [.js .jpg .css .png]


b. ESlint: 
.    	Optimiza el codigo, 
.   	Mejora la sintaxis 
.    	Advierte de patrones que pueden lanzar errores
.    	Configurar para generar convenio entre los desarrolladores. Ej: Los string van con comillas simples 


c.d.  Jest y @testing-library: Librerias para testear codigo
.   	En CRA se utiliza solo Jest. Comando: npm test: (Testea los archivos terminados en .test.js)
.   	Vite trabaja con una libreria llamada vitest


e.  Fragment <> </>
Se utiliza para contener elemento que retornamos para no generar nodos extras en el DOM
Al no existir para el DOM, no aparaece como un elemento en (Navegador/inspeccionar/Elementos)
Para darle estilos al contenedor fragment <></> se debe convertir en un <div className="estilo"></div>;

// return( // Debe retornar un solo elemento, en este caso un contenedor de elemetnos llamado fragment
// 		<>
// 			<div></div>
// 			<p></p>
// 			<h1></h1>
// 		</>
// )


f.  Children
Se utiliza para retornar un elemento sin saber cual es el elemento contentedor del componente donde trabajamos
Children: Elemento que esta dentro de otro elemento padre */
