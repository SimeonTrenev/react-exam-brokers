import React, { useState } from "react";
import axios from "axios";
// import './LoginForm.css';
// import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const redirectToRegister = () => {
    // props.history.push("/register");
  };

  const redirectToHome = () => {
    // props.history.push("/");
    return;
  };

  const loginFunction = (e) => {
    const { email, password } = state;
    if (password.length >= 5 && email.length >= 5) {
      axios
        .post("/login", { email, password })
        .then((response) => {
          window.sessionStorage.setItem("token", response.data.token);
          console.log(response.data.token);
          props.updateSessinStatus(!!response.data.token);
        })
        .catch((err) => console.log(err));

      redirectToHome();
    } else {
      redirectToRegister();
    }

    // axios.get('http://localhost:3000/login')
    //     .then(response => console.log(response.data))
    //     .catch(err => console.log(err))
  };

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
