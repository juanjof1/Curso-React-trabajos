import React from "react";
import styled from "styled-components";
import { Calculator } from "./Calculator/calculator";
import { Counter } from "./counter";
// import { Container } from './Container';
// import { HelloClass } from './HelloClass';
import { Hello } from "./Hello";
import { Nav } from "./Nav";
import { Todo } from "./Todo";
import { Wrapper } from "./Wrapper";

export type User = {
  name: string;
  age: number;
  email: string;
  address: string;
};

export const Home: React.FC = () => {
  const users: User[] = [
    {
      name: "Salvador",
      age: 30,
      email: "salvador@ucreativa.com",
      address: "San Jose"
    },
    {
      name: "Amanda",
      age: 34,
      email: "amanda@ucreativa.com",
      address: "San Jose"
    },
    {
      name: "Lester",
      age: 20,
      email: "lester@ucreativa.com",
      address: "San Jose"
    }
  ];
  // const filteredUsers = users.filter((user) => user.age < 30);
  const totalAge = users.reduce(
    (prevUser, currentUser) => prevUser + currentUser.age,
    0
  );
  const ageMessage =
    totalAge <= 20
      ? "Personas muy jovenes"
      : totalAge <= 60
      ? "Persona menores a 40 anos"
      : "Personas";

  const handleUser = (name: string) => console.log("Click en usuario", name);

  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <h2>Lista de Usuarios</h2>
        {users.map((user) => (
          <Hello
            key={user.email}
            name={user.name}
            age={user.age}
            email={user.email}
            handleClick={(name: string) => handleUser(name)}
          />
        ))}
        <p>
          Edad total {totalAge} {ageMessage}
        </p>
        <h3>Lista de Usuarios Menores a 30 años</h3>
        {/* {filteredUsers.map((user) => <Hello handleClick={(name: string) => handleUser(name)} key={user.email} name={user.name} age={user.age} email={user.email} />)} */}
        {/* <HelloClass name={'Salvador'} age={30} email={'salvador@ucreativa.com'} address={'San Jose'} /> */}
        {/* <Hello name={'Ariel'} age={28} email={'ariel@ucreativa.com'} /> */}
        {/* <Container users={users}/> */}
        <Calculator />

        <Image
          src="https://images.unsplash.com/photo-1634805879838-a057473efd77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
          alt="Rocky Mountain"
        />
        <img
          className="image-circle"
          src="https://images.unsplash.com/photo-1634805879838-a057473efd77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
          alt="Rocky Mountain"
        />

        <Todo />
        {/* <Wrapper>
      <Counter />
      <p>Hola! Este es un ejemplo de un elemento children</p>
    </Wrapper> */}
      </div>
    </React.Fragment>
  );
};

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`;

// const ImageContainer = styled.div`
// 	width: 500px;
// 	height: 500px;
// 	img{
// 		border-radius: 50%;
// 		width: 100%;
// 		height: 100%;
// 	}

// `;
