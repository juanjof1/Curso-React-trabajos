import React from "react";
import { User } from "./App";
interface ContainerState {
  showMessage: boolean;
}

interface ContainerProps {
  name?: string;
  users?: User[];
}

export class Container extends React.Component<ContainerProps, ContainerState> {
  state: ContainerState = {
    showMessage: false
  };

  render() {
    const { showMessage } = this.state;
    const userName = this.props.name ?? "No name";
    const users = this.props.users && this.props.users.length > 1;
    const buttonText = this.state.showMessage ? "hide message" : "show message";
    return (
      <React.Fragment>
        <h1>Hello! {userName}</h1>
        <button
          onClick={() =>
            this.setState((previous) => ({
              showMessage: !previous.showMessage
            }))
          }
        >
          {" "}
          {buttonText}
        </button>
        <div>{showMessage ? <Message /> : null}</div>
        <div>{users && <p> Hay mas de un usuario en la lista</p>}</div>
      </React.Fragment>
    );
  }
}

const Message: React.FC = () => {
  return <p>this is a message</p>;
};
