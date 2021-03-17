import AddOptions from './components/addOptions'
import HomePage from './components/homePage'
import AddOffer from './components/addOffer'
import OffersFilter from './components/OffersFilters'
import './App.css';
import { Route, Link, NavLink, Redirect, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
        <HomePage />
        </Route>
        <Route path='/add-offer' component={AddOffer} />
      <Route path='/add-options' component={AddOptions}/>
      <Route path='/show-offers' component={OffersFilter} />
      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
