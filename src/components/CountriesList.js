import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  // console.log('countries: ', countries);
  return (
    <div className="">
      <div className="">
        {countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              to={`/${country.alpha3Code}`}
              country={country}
            >
              <p>{country.name.official}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
