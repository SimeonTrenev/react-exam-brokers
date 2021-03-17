import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <ul>
               <li> <NavLink to = '/' exact>Home</NavLink></li>
               <li><NavLink to='/aboutUs' exact>За нас</NavLink></li>
               <li><NavLink to = '/add-offer' exact>Добави оферта</NavLink></li>
               <li> <NavLink to='/add-options' exact>Добави опция</NavLink></li>
               <li><NavLink to='/show-offers' exact>Покажи оферти</NavLink></li> 
            </ul>
        </nav>
    )
}

export default Header