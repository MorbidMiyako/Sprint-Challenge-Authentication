import React from 'react';
import { Route } from "react-router-dom"
import './App.css';
import Projects from "./components/Projects"

import PrivateRoute from "./components/Projects"
import Login from "./components/Login"
import Register from "./components/Register"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Register />
      </Route>
      <PrivateRoute path="/jokes">
        <Projects />
      </PrivateRoute>
    </>
  );
}

export default App;
