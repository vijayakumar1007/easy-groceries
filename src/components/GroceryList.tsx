import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GroceryItem } from '../models/GroceryItem';

const GroceryList: React.FC<{ addToBasket: (item: GroceryItem, quantity: number) => void }> = ({ addToBasket }) => {
  const [groceries, setGroceries] = useState<GroceryItem[]>([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      const response = await axios.get('/api/groceries');
      setGroceries(response.data);
    };
    
    fetchGroceries();
  }, []);

  return (
    <div>
      <h2>Grocery List</h2>
      {groceries.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: £{item.price}</p>
          <input type="number" min="1" placeholder="Quantity" onChange={(e) => addToBasket(item, Number(e.target.value))} />
        </div>
      ))}
    </div>
  );
};