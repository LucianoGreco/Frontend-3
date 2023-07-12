import React, { Component } from 'react'
// rcc
export default class ClassComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            nombre: 'Luciano',
            edad: 31
        }
        console.log('A. Class: Se ejecuta el constructor') // 1
    }

    componentDidMount(){ // Componente montado
        console.log('C. Class: Se monta el componente') // 3
    }

    componentDidUpdate(){ // Componente actualizado
        console.log('D. Class: Se actualiza el componente')
    }

    componentWillUnmount(){ // Componente desmontado
        console.log('E. Class: Se desmonta el componente')
    }

    render() {
        console.log('B. Class: Se ejecuta el render') // 2 
        //console.log(this.state)

        return (
            <div>
                <h1>Componente de Clase</h1>
                <h2>Usuario: {this.state.nombre}</h2>
                <h2>Edad: {this.state.edad}</h2>
                <h2>{this.state.cargando ? 'Cargando...' : 'Finalizado !'}</h2>

                <button 
                    onClick={() => this.setState({nombre: 'Gabriel'})}
                    >Cambiar Nombre</button>
            </div>
        )
    }
    
}
