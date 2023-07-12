/* EJEMPLO PRACTICO */

const lista = [
    "El pianista",
    'Titanic',
    'Avatar',
    'Avengers',
    'Mario Brhos',
]


// Recorre la lista y devuelve un <ul> con la lista mapeada de <li>peliculas</li>

    const Peliculas = () => { // Recorre la lista y devuelve un <ul> con la lista mapeada de <li>peliculas</li>
        let peliculas = lista.map( (peli, i) => {

            // a. REACT - (Mapeo de lista) 
            //return React.createElement('li', null, i+'. '+peli) 
            
            // b. BABEL - (Mapeo de lista)
            return <li>{i +'. '+peli}</li> // JavaScript <-(antes) return (despues)-> html {JavaScript}
        });
    
        //return React.createElement('ul', null, lista) // retorna Array de pelicula - El pianistaTitanicAvat..

        //a. REACT - (Retorno de lista)
        //return React.createElement('ul', null, peliculas) 

        // b. BABEL - (Retorno de lista)
        return <ul>{peliculas}</ul> // JavaScript <-(antes) return (despues)-> html {JavaScript}

/*
0. El pianista
1. Titanic
2. Avatar
3. Avengers
4. Mario Brhos
*/

    }


/* .redenr(): 
Se utiliza para generar la representación visual o la salida de un objeto o componente, permitiendo que los usuarios vean y interactúen con la información de una manera comprensible y atractiva.

Acepta dos argumentos
.    El contenido -> Peliculas()
.    El contenedor -> <div id='root'></div>*/

    ReactDOM.render( 
        //Peliculas(), // Invocacion de funciones
        //<Peliculas></Peliculas>, // Etiquetas personalizadas (dobles)
        <Peliculas/>, // Etiqueta personalizada (unica) para ReactDOM: Componente de funcion
        <peliculas/>,
        document.getElementById('root') // *Obtenemos el elementos con el id root (Contenedor)
    )


// JSX: Retorna elementos de JS Y HTML
// Babeljs.io -> Try it out 

// Los componentes a diferencia de las funciones se escriben con MAYUSCULA en la primer letra <Peliculas/>,, ya que si se coloca con minuscula lo toma como etiqueta HTML <peliculas/>,,  y no JSX





