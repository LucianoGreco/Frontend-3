/* # Ejemplo N°2  

Se define una constante llamada ‘lista’ que contiene una matriz de nombres de peliculas */
const lista = [ // Lista de peliculas
    'Rapido y Furioso',
    'Titanic',
    'Mar de plastico',
    'La casa de papel',
    'El patron del mal'
]


document.getElementById('root').innerHTML = `<ul>${lista.map((pelis) => `<li>${pelis}</li>`)}</ul>`; 
/*
document.getElementById(‘root’): Obtener el elemento con el identificador "root"
root: Contenedo donde se mostrara la lista de peliculas
InnertHTML: Se asigna el contenido del elemento root
lista.map(pelis): Se utiliza el metodo map en la matriz lista para crear una serie de elementos de lista <li> que contienen los nombres de las peliculas
*/

/*
HTML - (Renderizado con JavaScript)
    <div id="root">
        <ul>
            <li>Rapido y Furioso</li>
            <li>Titanic</li>
            <li>Mar de plastico</li>
            <li>La casa de papel</li>
            <li>El patron del mal</li>
        </ul>
    </div>
*/

/*
lista.map(): --------------- Recorre la matriz “lista” 
React.createElement(): ----- Crea cada elemento html
movies: -------------------- Contiene los elementos <li></li> */
const Peliculas = () => { 

    let movies = lista.map( (peli, i) => {
        return React.createElement('li', null, (i+1) + '.' + peli) // <li>1.Rapido y Furioso</li>  
    });

    return React.createElement('ul', null, movies) // <ul><li>1.Rapido y Furioso</li></ul>
}

// ReactDOM.render(): Renderiza el contenido de la funcion peliculas en el elemento con id root
ReactDOM.render( // Agrega la lista de peliculas al <div id="root"> .... </div>
     Peliculas(), // Contenido
     document.getElementById('root') // Contenedor
)