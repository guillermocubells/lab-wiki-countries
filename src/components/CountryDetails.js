import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import countries from '../countries.json';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();

  return (
    <div className="">
      {countries
        .filter((selectedCountry) => {
          return selectedCountry.alpha3Code === alpha3Code;
        })
        .map((country) => {
          return (
            <div key={country.alpha3Code}>
              <h1>{country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {country.borders.map((border) => {
                          return (
                            <li key={border}>
                              <Link>{border}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}

export default CountryDetails;
