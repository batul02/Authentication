import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import Signin from './Signin';
import Signup from './Signup';

class App extends Component{

  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="https://auth-havi.netlify.app" element={<Signup />}>
          </Route>
          <Route exact path="https://auth-havi.netlify.app/signin" element={<Signin />}>
          </Route>
          <Route exact path="https://auth-havi.netlify.app/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
