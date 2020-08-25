import React from 'react';
import './Country.css';

const Country = (props) => {
    
    const {flag, name, capital, population, region} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="container">
            <div className="flag">
                <img src={flag} alt=""/>
            </div>

            <div className="country-info">
                <h4>Name : {name}</h4>
                <h5>Capital : {capital}</h5>
                <p><small>Population : {population}</small></p>
                <p><small>Region : {region}</small></p>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
            
        </div>
    );
};

export default Country;