//rcc
import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    // console.log(this) // null
    // console.log(this.state) // null
    console.log(this.setState()) // null

    return (
      <div>ClassComponent</div>
    )
  }
}
// Minuto: 11:55