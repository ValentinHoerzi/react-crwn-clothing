import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
