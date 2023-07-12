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


let arr = [1,2,3,4]
let [a,b,c,d] = arr

console.log("console.log("+c+")") // 3


