import "./App.css";
import { Component } from "react";

const user = "Daiana";
class App extends Component {
  constructor() {
    super();
    this.state = {
      session: false,
      info: "No se ha cargado la info",
    };

    console.log("Ejecutando el constructor");
  }

  componentDidMount() {
    console.log("Ejecutando el componentDidMount");
    setTimeout(() => {
      this.setState({
        session: true,
        info: `Bienvenido/a ${user}`,
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log("Ejecutando el componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Ejecutando el componentWillUnmount");
  }

  render() {
    console.log("Ejecutando el render");
    console.log(this.state.info);
    return (
      <div>
        {this.state.session ? (
          <div>
            <h1>{this.state.info}</h1>
            <h2>Estás conectado/a: 🐉</h2>
          </div>
        ) : (
          <h2>Aún no te has concetado: 😸</h2>
        )}
      </div>
    );
  }
}

export default App;

