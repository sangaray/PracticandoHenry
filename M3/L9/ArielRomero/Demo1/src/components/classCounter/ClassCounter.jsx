import React, { Component } from "react";
import ClassDisplay from "../classDisplay/ClassDispay";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props); // trae los métodos de la calse "Component"
    this.state = {
      contador: 0,
    };
  }

  sumarUno = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  componentDidUpdate() {
    console.log("El componente se actualizó");
  }

  render() {
    return (
      <div>
        <h2>Contador de Clase</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumarUno}>Sumar 1</button>
        {this.state.contador > 2 && this.state.contador < 5 ? (
          <ClassDisplay />
        ) : null}
      </div>
    );
  }
}
