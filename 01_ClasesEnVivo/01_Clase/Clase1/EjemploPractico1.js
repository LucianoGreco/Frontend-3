/* # LIBRERÍA REACT

Metodo: React.CreateElemento(component, props, …children)
1.	Tipo de elemento HTML
2.	Propiedades del elemento
3.	Contenido dentro del elemento */

let titulos = React.createElement('h1', {class: 'titulo'}, 'Hola Lucho') // <h1 class='titulo'>Hola</h1>

/*
HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>

    <div id="root"> 
        ////////////// ACA ES DONDE SE RENDERIZA ///////////
    </div>

    <script src="/LibReact.js"></script>
</body>
</html>
*/


// # EJEMPLO N°1 

let titulo = React.createElement('h1', null, 'Hola Lucho') // <h1>Hola</h1>

let perro = 'https://images.ecestaticos.com/h34TvzTFVdrau9Un4Wdmwhed_e4=/0x115:2265x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg';
let img = React.createElement('img', {src: perro, alt:''})

let seccion = React.createElement('div', null, titulo, img)


ReactDOM.render( //---------------------- Renderizar
    seccion, //-------------------------- Componente que deseo agregar
    document.getElementById('root') //--- Donde lo deseo agregar
)

/*
HTML - (Renderizado con JavaScript)
    <div id="root">
        <div>
            <h1>Hola Lucho</h1>
            <img src="https://linckdelperro.com.ar" alt="">
        </div>
    </div>
*/




