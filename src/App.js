import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState();
  useEffect(() => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response);
        setCountries(response.countries);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}></CountriesList>
      <Routes>
        <Route
          path="/country/:alpha3Code"
          // {/* <Route path="/:id" element={ <SomeComponent someData={someData} /> } /> */}
          element={<CountryDetails countryDetail={countries} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
