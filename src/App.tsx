import React from "react";
import { Home } from "./components/Home";
import { Switch, Route } from "react-router";
import { About } from "./components/About";
import { MyTodoList } from "./components/myTodoList";
import { Calculator } from "./components/Calculator/calculator";
import { NotFound } from "./components/404";
import { Nav } from "./components/Nav";
const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/todo/:todoSlug">
          <MyTodoList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
