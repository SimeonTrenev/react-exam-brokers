import AddOptions from './components/addOptions'
import HomePage from './components/homePage'
import AddOffer from './components/addOffer'
import OffersFilter from './components/OffersFilters'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import AboutUs from './components/AboutUs'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import './App.css';
import { Route,  Switch  } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header />
      
      <Switch>
        <Route path='/' exact={true}>
        <HomePage />
        </Route>
        <Route path='/aboutUs' component={AboutUs}></Route>
        <Route path='/add-offer' component={AddOffer} />
      <Route path='/add-options' component={AddOptions}/>
      <Route path='/show-offers' component={OffersFilter} />
      <Route path='/register' component={RegisterForm} />
      <Route path='/login' component={LoginForm} />
      <Route path='/logout' component={Logout} />
      <Route component={ErrorPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
