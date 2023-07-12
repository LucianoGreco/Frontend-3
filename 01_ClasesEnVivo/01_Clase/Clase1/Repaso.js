// REACT – Facebook 2003

// IDE ONLINE: https://www.programiz.com/javascript/online-compiler/


// # DECLARAR UNA VARIABLE
var x = 0; // Scope Global - Se evita var para no sobreescribir variables
let x = 1; // Scope Local

const c = true; // Scope Local
c = false; // No se puede cambiar el valor asignado inicialmente


// # ARRAYS
let arr = [1,'a',"auto",[1,2,3,4],true,{name: 'Luciano', age: 31}]

console.log(arr); // (6) [1, 'a', 'Luciano', Array(4), true, {name: 'Luciano', age: '31'}]
console.log(arr[1]); // a
console.log(arr[3][1]); // 2
console.log(arr[5].name); // Luciano


// # MANIPULAR VALORES DE UN ARRAY
let num = [1,2,3] //--------------- (3) [1, 2, 3]

num.unshift('x') // (4) [x, 1, 2, 3] - Agrega un valor al principio
num.push('y') // (5) [x, 1, 2, 3, y] - Agrega un valor al final
num.shift() // (4) [1, 2, 3, y] ------ Elimina el primer valor
num.pop() // (3) [1, 2, 3] ----------- Elimina el ultimo valor


let numeros = [1,2,3] // (3) [1, 2, 3]
let letras = ['a','b','c'] // (3) ['a', 'b', 'c']

let caracteres1 = numeros + letras // 1,2,3a,b,c
let caracteres2 = numeros.concat(letras) // (6) [1, 2, 3, 'a', 'b', 'c']
let caracteres3 = [numeros, letras] // (2) [Array(3), Array(3)]


// # SPREAD OPERATOR …
let caracteres4 = [...numeros, ...letras] // (6) [1, 2, 3, 'a', 'b', 'c']


// # OBJETO 
let estudiante = {
    name: 'Luciano', // Se compone de clave y valor
    age: 31
}
console.log(estudiante.name); // Luciano

let infoEstudiante = {
    //estudiante, // {estudiante: {…}, carrera: 'CTD', bimestre: 2, time: 'PT'}
    ...estudiante, // {name: 'Luciano', age: 31, carrera: 'CTD', bimestre: 2, time: 'PT'}
    carrera: 'CTD',
    bimestre: 2,
    time: 'PT'
}


// # FUNCIONES

// a.	Funciones Expresadas
function myFunc1(){

}

// b.	Funciones Anonimas
const myFunc2 = function(nombre) {

}

/* c.	Arrow Function: Se utiliza en callback
En ves de declarar funciones con nombres, se declara una funcion anonima que funcione a modo de callback y no va hacer falta declararla o asignarla ya que solo funciona en ese contexto */
const myFunc3 = () => {

}
