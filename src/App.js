import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}></CountriesList>
      <Routes>
        <Route
          path="/:alpha3Code"
          element={<CountryDetails countries={countries} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
