import React, { useState } from "react";
import axios from "axios";
// import './LoginForm.css';
// import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import { useHistory } from 'react-router-dom'
import InputError from './sharedComponents/InputError'

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  const [errorMessage, setErrorMessage] =  useState('')

  const redirectToRegister = () => {
    history.push("/register");
  };

  const redirectToHome = () => {
    // window.location.href='/' // ??????
    history.push('/')
    return;
  };

  const loginFunction = (e) => {
    let { email, password } = state;
    
    if (password.length >= 5 && email.length >= 5 && validateEmail(email)) {
      axios
        .post("/login", { email, password })
        .then((response) => {
          window.sessionStorage.setItem("token", response.data.token)
          window.sessionStorage.setItem("email", response.data.email);
          // console.log(response.data.token);
          props.updateSessinStatus(!!response.data.token);
        })
        .catch((err) => {
        history.push('/login')
        setErrorMessage('Password is too short!')
        return
        });

      redirectToHome();
    } else {
      if(password.length < 5){
        setErrorMessage('Password is too short!')
        state.password = ''
       state.email = ''
      }else if(email.length < 5){
        setErrorMessage('Email is too short!')
        state.password = ''
       state.email = ''
      }else{
        setErrorMessage('Email or password does not exist!Try again :)')
       state.password = ''
       state.email = ''
      }
      
      // redirectToRegister();
    }

    // axios.get('http://localhost:3000/login')
    //     .then(response => console.log(response.data))
    //     .catch(err => console.log(err))
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const handleSubmitClick = (e) => {
    e.preventDefault();
    loginFunction();
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <InputError>{errorMessage}</InputError>
      
      
      <div className="registerMessage">
        <span>Dont have an account? </span>
        <span className="loginText" onClick={() => redirectToRegister()}>
          Register
        </span>
        
      </div>
    </div>
  );
}

export default LoginForm;
