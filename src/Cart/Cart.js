import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((total, country) => total + country.population, 0);
    const style = {
        textAlign: 'center', 
        color: 'white'
    }
    return (
        <div>
            <h5 style={style}>This is cart: {cart.length}</h5>
            <h5 style={style}>Total Population: {totalPopulation}</h5>
        </div>
    );
};

export default Cart;