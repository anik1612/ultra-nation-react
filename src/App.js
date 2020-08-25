import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './Country/Country';
import Cart from './Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  const style = {
    textAlign: 'center',
    padding: '5px', 
    color: 'white'
  }

  return (
    <div>
        <div style={{border: '1px solid tomato', margin: '10px', borderRadius: '5px'}}>
        <h1 style={style}>Country loaded: {countries.length}</h1>
        <h3 style={style}>Country added: {cart.length}</h3>
        <Cart cart={cart}></Cart>
      </div>
      <div className="App">
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </div>
    </div>

  );
}

export default App;
