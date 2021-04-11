import React from "react";
import { NavLink } from "react-router-dom";
import Greetings from './Greetings'
import '../components/sharedComponents/Logout.css'


const Header = (props) => {
  const token = window.sessionStorage.getItem("token");
  const email = window.sessionStorage.getItem("email")
  

  if (token && !props.hasSession) {
    props.updateSessinStatus(true);
  }
  
  const logout = () => {
    props.updateSessinStatus(false);
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("email");

  };

  return (
    <nav
      style={{ backgroundColor: "#ffe6e6" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <NavLink className="navbar-brand" to="/" exact>
        Home
      </NavLink>
      <NavLink className="navbar-brand" to="/aboutUs" exact>
        За нас
      </NavLink>
      {props.hasSession && (
        <React.Fragment>
          <NavLink className="navbar-brand" to="/add-offer" exact>
            Добави оферта
          </NavLink>
          <NavLink className="navbar-brand" to="/add-options" exact>
            Добави опция
          </NavLink>
          <NavLink className="navbar-brand" to="/show-offers/1" exact>
            Покажи оферти
          </NavLink>

          <NavLink onClick={logout} className="navbar-brand" id='lastOne' to="/" exact>
            Logout
          </NavLink>
          
          <Greetings email={email}/>

        </React.Fragment>
      )}
      {!props.hasSession && (
        <React.Fragment>
        <NavLink className="navbar-brand" to="/register" exact>
        Register
      </NavLink>
      <NavLink className="navbar-brand" to="/login" exact>
        Login
      </NavLink>
      </React.Fragment>
      )}
      
    </nav>
  );
};

export default Header;
