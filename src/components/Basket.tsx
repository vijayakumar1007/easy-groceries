import React, { useState } from 'react';
import { GroceryItem } from '../models/GroceryItem';
import { OrderItem } from '../models/Order';

interface BasketProps {
  items: OrderItem[];
  onUpdateTotal: (total: number) => void;
  onProceedCheckout: () => void;
}

const Basket: React.FC<BasketProps> = ({ items, onUpdateTotal, onProceedCheckout }) => {
  const calculateTotal = (items: OrderItem[]) => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    onUpdateTotal(total);
  };

  const removeItem = (itemId: number) => {
    
  };

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x £{item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onProceedCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Basket;
