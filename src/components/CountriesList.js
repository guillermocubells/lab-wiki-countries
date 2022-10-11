import React from 'react';
import { useNavigate } from 'react-router-dom';

function CountriesList({ countries }) {
  //   console.log('countries: ', countries);
  const navigate = useNavigate();
  return (
    <div className="">
      {countries.map((country) => {
        return (
          <div
            className=""
            key={country.alpha3Code}
            onClick={() => {
              navigate(`/${country.alpha3Code}`);
            }}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flag"
            />
            <span>{country.name.common}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
