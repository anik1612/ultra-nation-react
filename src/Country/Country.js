import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, region, population, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;

    return (
        <div>
            <div className="country-section">
                <img src={flag} alt="flag-img" />
                <h4>{name}</h4>
                <h5>Region: {region}</h5>
                <p>Population: {population}</p>
                <button className="add-btn" onClick={ () => (handleAddCountry(props.country))}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;