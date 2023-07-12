//ESTADOS
/*
ClassComponent
context: {}
props: {}
refs: {}
state: null Espacio de memoria donde guarda datos dentro del componente
*/




// # 1 DESECTRUCTURAR UN ARRAY
const arr = ['Luciano', 'Celeste', 'Yanela']

// let primerNombre = arr[0]
// let segundoNombre = arr[1]
// let tercerNombre = arr[2]

// Desestructuracion:
let [primerNombre, segundoNombre, tercerNombre] = arr

console.log(primerNombre, segundoNombre, tercerNombre) // Luciano Celeste Yanela




// # 2 DESECTRUCTURAR UN OBJETO
const obj = {
    name: 'Rolando',
    surname: 'Greco',
    favColor: 'Black'
}

// Desestructuracion:
let {name, surname, favColor} = obj

console.log(name, surname, favColor) // Rolando Omar Black

// Cambiar un valor
//obj = {name: 'Luciano'} // Error

obj.name = 'Luciano'
console.log(obj) // {name: 'Luciano', surname: 'Greco', favColor: 'Black'}

console.log(name = 'Luciano', surname, favColor, edad=31) // Edad=31 se lo agrega en el cosole.log