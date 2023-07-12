/*REPASO DE LA CLASE 1

LIBRERIAS: 	Reack
		ReackDom

METODOS:	.createElement() + argumentos
		.render().() + argumentos

LINKS CDN
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script> React
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> ReactDOM

*/

//FORMAS DE DECLARAR VARIABLES
// var: variable estandar. Funciona en varios ambitos o bloques
var x = 1; // No se usa

// let: Funciona solo dentro del bloque de codigo
let x = 1;

// const: Declara una constantes la cual no va a poder modificarse
const x = 1;
x = 2;


// DECLARAR FUNCIONES
function myFunction(){}
const myFunction = function(){}
const myFunction = () => {} //La mas usada


/*METODOS DE JAVASCRIPT QUE VAMOS A USAR CON REACT
a) .map()
b) .filter() 
c) .slice()
d) .push()
f) .pop()
g) .sort()
h) .reduce()
*/


/* a) .map() 
Itera sobre cada elemento del array original, aplica la función callback a cada uno y crea un nuevo array con con los resultados de la transformación
Sintaxis:
array.map(funcion(elemento, indice, array) {
    // Lógica de transformación })
*/
const numeros1 = [1, 2, 3, 4, 5];
const multiplicados = numeros1.map((numero) => {
  	return numero * 2;
});
console.log(multiplicados); // Resultado: [2, 4, 6, 8, 10]




/* b) .filter() 
Se utiliza para filtrar elementos de un array según ciertos criterios y crear un nuevo array con los elementos que cumplen con esos criterios
Sintaxis:
array.filter(funcion(elemento, indice, array) {
    // Lógica de filtrado })
*/
const numeros2 = [1, 2, 3, 4, 5];
const numerosPares = numeros2.filter((numero) => {
    return numero % 2 === 0;
});




/* c) .slice() 
Se utiliza para extraer una porción de una cadena o matriz existente
Sintaxis: cadena.slice(inicio, fin)
*/
const cadena = "Hola mundo";
const subcadena = cadena.slice(0, 4);
console.log(subcadena); // Resultado: "Hola"

const numeros3 = [1, 2, 3, 4, 5];
const subarray = numeros3.slice(1, 4);
console.log(subarray); // Resultado: [2, 3, 4]




/* d) .push() 
Se utiliza para agregar uno o más elementos al final de un array existent
Modifica el array original
Sintaxis: array.push(elemento1, elemento2, ..., elementoN)
*/
const numeros4 = [1, 2, 3];
numeros4.push(4);
console.log(numeros4); // Resultado: [1, 2, 3, 4]




/* e) .pop() 
Se utiliza para eliminar el último elemento de un array y devolver ese elemento eliminado.
Puedes usarlo para reducir la longitud de un array y obtener el elemento eliminado.
Sintaxis: array.pop()
*/
const numeros5 = [1, 2, 3, 4, 5];
const ultimoElemento = numeros5.pop();
console.log(numeros5); // Resultado: [1, 2, 3, 4]
console.log(ultimoElemento); // Resultado: 5




/* f) .sort() 
Se utiliza para ordenar los elementos de un array en su lugar
uedes usarlo para ordenar alfabéticamente o numéricamente los elementos de un array.
Sintaxis: array.sort()
*/
const frutas = ["manzana", "banana", "naranja", "kiwi"];
frutas.sort();
console.log(frutas); // Resultado orden alfabético: ["banana", "kiwi", "manzana", "naranja"]

const numeros6 = [5, 2, 10, 1, 8];
numeros6.sort(function(a, b) {
    return b - a;
});
console.log(numeros6); // Resultado Descendente: [ 10, 8, 5, 2, 1 ]




/* g) .reduce() 
Se utiliza para reducir los elementos de un array a un único valor
Puedes usarlo para realizar operaciones de suma, resta, concatenación u otras operaciones de reducción en un array.

Esta función puede tomar hasta 4 argumentos:
Acumulador: -------------- El valor acumulado por la suma de los elementos
elemento: ----------------- El elemento actual que se está procesando en el array.
indice: (opcional) -------- El índice del elemento actual en el array.
array: (opcional) --------- El array original en el que se está aplicando la reducción.
valorInicial: (opcional) -- El valor inicial del acumulador. Por defecto se usa el primer elemento del array
Sintaxis:
array.reduce(funcion(acumulador, elemento, indice, array) {
    		// Lógica de reducción
}, valorInicial)
*/
const numeros7 = [1, 2, 3, 4, 5]; // 1 + 2 + 3 + 4 + 5 = 15
const sumaTotal = numeros7.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
}, 0);
console.log(sumaTotal); // Resultado: 15




/* METODOS DE DOCUMENT

a) document.querySelector(): 
b) document.querySelectorAll()
c) document.getElementById() *
d) document.getElementsByClassName()
f) document.getElementsByName()
g) document.addEventListener()
*/

/* a) document.querySelector():
Se utiliza para seleccionar elementos en una página web a traves de un selector.
Devolver solo el primer elemento que encuentra */

// Selecciona el primer elemento con la clase "miClase"
var elemento = document.querySelector('.miClase');

// Cambia el color de fondo del elemento seleccionado
elemento.style.backgroundColor = 'red';




/* b) document.querySelectorAll(): 
Se utiliza para seleccionar múltiples elementos en una página web y devuelve una lista de esos elementos.*/

// Selecciona todos los elementos con la clase "miClase"
var elementos = document.querySelectorAll('.miClase');

// Recorre la lista de elementos y cambia su color de fondo
elementos.forEach(function(elemento) {
    elemento.style.backgroundColor = 'blue';
});




/* c) document.getElementById():
Se utiliza para seleccionar un elemento específico en una página web utilizando su identificador único, ID. */

// Selecciona el elemento con el ID "miElemento"
var elemento = document.getElementById('miElemento');

// Cambia el contenido de texto del elemento seleccionado
elemento.textContent = '¡Hola, mundo!';




/* d) document.getElementsByClassName(): 
Se utiliza para seleccionar elementos en una página web basándose en su clase. */

// Selecciona todos los elementos con la clase "miClase"
var elementos = document.getElementsByClassName('miClase');

// Recorre la lista de elementos y cambia su color de fondo
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.backgroundColor = 'red';
}




/* e) document.getElementsByName(): 
utiliza para seleccionar elementos en una página web basándose en su atributo "name"

    <body>
        <input type="text" name="miNombre" placeholder="Ingresa tu nombre">
    </body>*/

// Selecciona todos los elementos con el atributo "name" igual a "miNombre"
var elementos = document.getElementsByName('miNombre');

// Recorre la lista de elementos y cambia su contenido de texto
for (var i = 0; i < elementos.length; i++) {
    elementos[i].textContent = '¡Hola!';
}




/* f) document.addEventListener(): 
Se utiliza para agregar un "escuchador" o "listener" a un elemento del documento
Permite detectar cuando ocurre un evento en ese elemento y realizar una acción en respuesta 
La funcion, toma dos argumentos principales: 
a.	Tipo de evento que se desea escuchar 
b.	Función que se ejecutará cuando ocurra el evento

Puedes utilizar diferentes tipos de eventos:

a. Eventos de ratón:
'click': se dispara cuando se hace clic en el elemento.
'mouseover': se dispara cuando el puntero del ratón se sitúa sobre el elemento.
'mouseout': se dispara cuando el puntero del ratón sale del elemento.
'mousemove': se dispara cuando se mueve el puntero del ratón sobre el elemento.


b. Eventos de teclado:
'keydown': se dispara cuando una tecla se mantiene presionada.
'keyup': se dispara cuando una tecla se suelta.
'keypress': se dispara cuando se presiona una tecla y se mantiene presionada.


c. Eventos de formulario:
'submit': se dispara cuando se envía un formulario.
'input': se dispara cuando se introduce un valor en un campo de entrada.
'change': se dispara cuando cambia el valor de un campo de entrada.


d. Eventos de carga:
'load': se dispara cuando se completa la carga de un recurso, como una imagen o un archivo externo.
'DOMContentLoaded': se dispara cuando se completa la carga inicial del documento HTML.*/

// Selecciona un elemento de botón
var boton = document.querySelector('#miBoton');

// Agrega un escuchador de evento de clic al botón
boton.addEventListener('click', function() {
    console.log('¡Haz hecho clic en el botón!');
});


/*
# Babel y JSX
Babel: Herramienta que convierte el codigo JS moderno en versiones compatibles con navegadores y entornos mas antiguos, permitiendo a los desarrolladores utilizar caracteristicas mas avanzadas sin preocuparce por la compatibilidad

JSX: Extension de JS que se utiliza en aplicaciones web utilizando la biblioteca de react
permite escribir codigo HTML-like dentro del codigo JS. 
JSX se compila en codigo JS antes de ser ejecutado por el navegador
*/