import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/inventory`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching inventory data:', error));
  }, []);

  return (
    <div>
      <h1>Inventory List</h1>
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