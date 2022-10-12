import React from 'react';
import { useNavigate } from 'react-router-dom';

function CountriesList({ countries }) {
  //   console.log('countries: ', countries);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries.map((country) => {
              return (
                <div
                  className="list-group-item list-group-item-action"
                  key={country.alpha3Code}
                  onClick={() => {
                    navigate(`/country/${country.alpha3Code}`);
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
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
