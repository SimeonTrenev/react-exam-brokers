import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    // <nav>
    //     <ul>
    //        <li> <NavLink to = '/' exact>Home</NavLink></li>
    //        <li><NavLink to ='/aboutUs' exact>За нас</NavLink></li>
    //        <li><NavLink to = '/add-offer' exact>Добави оферта</NavLink></li>
    //        <li> <NavLink to = '/add-options' exact>Добави опция</NavLink></li>
    //        <li><NavLink to = '/show-offers/1' exact>Покажи оферти</NavLink></li>
    //        <li><NavLink to = '/register' exact>Register</NavLink></li>
    //        <li><NavLink to = '/login' exact >Login</NavLink></li>
    //        <li><NavLink to = '/logout' exact>Logout</NavLink></li>
    //     </ul>
    // </nav>
    <nav style={{backgroundColor: '#ffe6e6'}} class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" exact>
        Home
      </NavLink>
      <NavLink className="navbar-brand" to ='/aboutUs' exact>За нас</NavLink>
      <NavLink className="navbar-brand" to = '/add-offer' exact>Добави оферта</NavLink>
      <NavLink className="navbar-brand" to = '/add-options' exact>Добави опция</NavLink>
      <NavLink className="navbar-brand" to = '/show-offers/1' exact>Покажи оферти</NavLink>
      <NavLink className="navbar-brand" to = '/register' exact>Register</NavLink>
      <NavLink className="navbar-brand" to = '/login' exact >Login</NavLink>
      <NavLink className="navbar-brand" to = '/logout' exact>Logout</NavLink>
    </nav>
  );
};

export default Header;
