import React, { useState } from 'react';
import './quantity.css'; // Import your CSS file

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="quantity-container">
            <button className="quantity-button" onClick={decrement}>-</button>
            <input className="quantity-input" type="text" value={quantity} readOnly />
            <button className="quantity-button" onClick={increment}>+</button>
        </div>
    );
};

export default Quantity;