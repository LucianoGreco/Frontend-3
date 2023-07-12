/* # CREAR PROYECTOS CON REACT:
.   CRA: Create-React-App
.   VITE: Create Vite

create.react-app: Comando que crea una aplicacion de React con una configuracion predeterminada
-----------------

# PARA CREAR UN PROYECTO ES NECESARIO TENER INSTALADO:
----------------------------------------------------
a. Node.js - Entorno de ejecucion de JavaScript (Lado Backend)
.   Verificar instalacion: node -v
.   Recomendado: version 12+ ( Actualizar)

b. npm (Node Package manager) - Se encarga de gestionar los paquetes de node 
.   Verificar instalacion: npm -v
.   Recomendado: version 5.2+



# COMANDOS DE INSTALACION O ACTUALIZACION DE PAQUETES
-----------------------------------------------------
01. npm: Maneja los packetes de node instalados, y si no los tiene los instala
.       npm init react-app nombreDelProyecto

02. npx: Ejecuta los paquetes de Node.js
.       npx create-react-app nombreDelProyecto

03. Yarn: Maneja los packetes de node de manera distinta a npm pero es lo mismo
.       yarn create react-app nombreDelProyecto

Nombre del proyecto: Puede ser cualquiera pero SIN mayuscula ni espacios



# INSTALACION en la terminal:
-----------------------------
1.	cd /Desktop/Frontend_3/02_Clase/Clase2 
2.	npx create-react-app c5-first-project 
3.	cd c5-first-project
4.	npm start


# PARA VISUALIZAR EL PROYECTO EN EL NAVEGADOR
----------------------------------------------
LocalHost Server: http://localhost:3000/



# ARCHIVOS PRINCIPALES:
-----------------------
index.html
    // <body>
    //     <div id="root"></div>
    // </body>

index.js
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    //      <React.StrictMode>
    //          <App />
    //      </React.StrictMode>
    // );


# ARCHIVOS Y DIRECTORIO DE CRA
-------------------------------
> node_modules: Contiene todas las bibliotecas y paquetes de software de terceros que tu proyecto necesita para funcionar.

> public: React contiene los archivos estáticos que se utilizarán al construir y ejecutar tu aplicación
.	favicon.ico
.	index.html: Este archivo es el punto de entrada de tu aplicación React
.	logo192.png
.	logo512.png
.	manifest.json
.	robots.txt

> src: Contiene la mayor parte del código fuente de tu aplicación. Aquí se encuentran los componentes de React, Archivos JavaScript, Archivos CSS o estilos, archivos de imagen y otros recursos necesarios tu aplicación
.	App.css
.	App.js
.	App.test.js
.	index.js
.	logo.svg
.	reportWebVitals.js
.	setupTests.js

> .gitignore: Especifica los archivos y directorios que deben ser ignorados y no deben ser rastreados por el control de versiones


> package-lock.json: Este archivo se utiliza para asegurar que todas las personas que trabajen en el proyecto tengan las mismas versiones de las dependencias instaladas, evitando problemas de compatibilidad.
Se actualiza automáticamente cada vez que se agregan, eliminan o actualizan las dependencias del proyecto garantizando que todos trabajen con las mismas versiones de dependencia
Contiene informacion detallada sobre las dependencia que el proyecto necesita
.	    name:
.	    version
.	    dependencias
.	    arbol de dependencia y como estas se relacionan


> package.json: 
Contiene la informacion del proyecto como dependencias requeridas, los comandos personalizados y la configuración específica
.	    Nombre del proyecto
.	    Version del proyecto
.	    Dependencia
.	    Script: Permite definir comandos personalizados en el archivo package.json que te permiten ejecutar. Ej: ejecutar pruebas
.	    Autor y licencia
.	    Configuración de webpack



> README.md: archivo de texto que contiene información y documentación sobre tu proyecto. 
Proporciona una descripción del proyecto, instrucciones de instalación, detalles sobre el uso y ejemplos, información sobre la colaboración y la licencia. 
Recurso para que desarrolladores comprendan y utilicen tu proyecto de Reac




# ACTUALIZAR LIBRERIAS PARA QUE FUNCIONEN CORRECTAMENTE
-------------------------------------------------------
Npm: Se encarga de comunicar (package-lock.json y package.json) con node_modules para saber que le hace falta al proyecto para funcionar correctamente
.   > node_modules 
.   > package-lock.json
.   > package.json

1.	cd c5-first-project
2.	npm install



# LOS ARCHIVOS MAS IMPORTANTES SON:
-----------------------------------
.   index.html
.   index.js
.   app.js o app.jsx (lo que sea que retorne con create.react-app lo va a tomar igual)

+------------+
| index.html | NO SE TOCA NADA
+------------+ */
// <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>



/*
+----------+
| index.js | NO SE TOCA NADA
+----------+ */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
        <App /> // Renderiza lo que se encuentra en el archivo app
    //</React.StrictMode>
);
reportWebVitals();



/*
+--------+
| app.ja | En este archivo es donde vamos a trabajar
+--------+ */
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Luciano Greco
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}
export default App;



/*
+-------------+
| .gitignore: | Filtra los archivos que se van a subir git hub y los que no
+-------------+
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules // No se sube a git por que los desarrolladores tienen estas librerias
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
*/





