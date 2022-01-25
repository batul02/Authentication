import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import Signup from './Signup';
import Signin from '/Signin';

class App extends Component{

  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />}>
          </Route>
          <Route exact path="/signin" element={<Signin />}>
          </Route>
          <Route exact path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
