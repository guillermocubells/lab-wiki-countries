import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
// import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
// import { useState } from 'react';

function App() {
  // const [allCountries, setAllCountries] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <div>
        <CountriesList countries={countries}></CountriesList>
      </div>
    </div>
  );
}

export default App;
