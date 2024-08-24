import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(''); // State to track error

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/inventory`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => {
        console.error('Error fetching inventory data:', error);
        setError('Failed to load inventory data. Please try again later.'); // Set error message
      });
  }, []);

  return (
    <div>
      <h1>Inventory List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Conditionally render the error message */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              {item.name} - Quantity: {item.quantity}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;