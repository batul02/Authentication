import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import Signin from './Signin';
import Signup from './Signup';

class App extends Component{

  render(){
    return(
      <div className="App">
        <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Signup }></Route>
                        <Route
                            exact
                            path="/signin"
                            component={Signin }
                        ></Route>
                        <Route
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        ></Route>
                    </Switch>
                </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
