import React from "react";

interface HelloClassProps {
  name: string;
  age: number;
  address?: string;
  email: string;
}
interface HelloClassState {
  count: number;
  error: string;
}

export class HelloClass extends React.Component<
  HelloClassProps,
  HelloClassState
> {
  state: HelloClassState = {
    count: 0,
    error: ""
  };

  increment = (count: number) => {
    this.setState((previosState) => ({ count: previosState.count + count }));
  };

  decrement = (num: number) => {
    this.setState((previosState) => ({ count: previosState.count - num }));
  };

  componentDidMount() {
    // EJEMPLOS DE USO
    // -  API CALL, ACTUALIZAR EL ESTADO CON EL RESULTADO
    // - Agregar un event listener
    console.log("Se agrego componente en el DOM");
  }
  componentDidUpdate() {
    if (this.state.count < 0) {
      alert("Count no debe ser negativo");
    }
    console.log("se actualizo componente");
  }
  componentWillUnmount() {
    // eliminar un event listener
    console.log("componente se va a eliminar");
  }
  render() {
    const { name, age, address = "no address", email } = this.props;
    const { count } = this.state;
    return (
      <div>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Address: {address}</li>
          <li> Email: {email}</li>
        </ul>
        <p>Count {count}</p>
        <p>{this.state.error}</p>
        <button onClick={() => this.increment(1)}>Increment</button>
        <button onClick={() => this.decrement(2)}>Decrement</button>
      </div>
    );
  }
}
