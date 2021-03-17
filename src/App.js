import AddOptions from './components/addOptions'
import HomePage from './components/homePage'
import AddOffer from './components/addOffer'
import OffersFilter from './components/OffersFilters'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import './App.css';
import { Route, Link, NavLink, Redirect, Switch,  } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header />
      
      <Switch>
        <Route path='/' exact={true}>
        <HomePage />
        </Route>
        <Route path='/add-offer' component={AddOffer} />
      <Route path='/add-options' component={AddOptions}/>
      <Route path='/show-offers' component={OffersFilter} />
      <Route component={ErrorPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
