import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './App.css';

function Signin(props) {

    // const history = useNavigate();
    const [username, setusername] = useState('');
    const[password, setpassword] = useState('');

    const signinUser = async (e) => {
      e.preventDefault();

      const res = await fetch(
          process.env.SINGIN_ACCESS,
          {
              method: "POST",
              headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: username,
                  password: password,
              }),
          }
      );

      const data = res.json();

      if (res.status === 400 || !data) {
          window.alert("Invalid Credentials");
      } else {
          localStorage.setItem("token", data.user);

          props.history.push("/dashboard");
      }
    };

    return(
      <div>
        <div className="container">
          <h2 className="text-center mb-4 marginup">Sign In</h2>
          <div className="form-div">
            <form method="POST">

              <input type="text" placeholder="Username" onChange={(e) => setusername(e.target.value)}
              value={username}
              className="form-control form-group"/>

              <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="form-control form-group"/>
              
              <input type="submit" className="btn btn-danger btn-block"
              value="Submit" onClick={signinUser}/>

            </form>
          </div>
          Don't have an Account?  
          <NavLink to="/" >  Sign Up</NavLink>
        </div>
      </div>
    );
}

export default Signin;