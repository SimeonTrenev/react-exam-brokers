import AddOptions from './components/addOptions'
import HomePage from './components/homePage'
import AddOffer from './components/addOffer'
import OffersFilter from './components/OffersFilters'
import './App.css';

function App() {
  return (
    <div >
      <AddOffer />
      <HomePage />
      <AddOptions />
      <OffersFilter />
    </div>
  );
}

export default App;
