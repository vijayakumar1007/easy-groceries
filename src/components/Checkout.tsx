import React, { useState } from 'react';
import { OrderItem, Order } from '../models/Order';
import { GroceryItem } from '../models/GroceryItem';
import { api } from '../services/api';

const Checkout: React.FC = () => {
  const [basketItems, setBasketItems] = useState<OrderItem[]>([]);
  const [loyaltyMember, setLoyaltyMember] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '' });

  const handleSubmitOrder = async () => {
    const order: Order = {
      orderNumber: Math.floor(Math.random() * 1000000),
      customerId: 35496,
      items: basketItems,
      totalAmount: totalAmount,
    };

 
    await api.submitOrder(order);
  };

  const toggleLoyalty = () => {
    setLoyaltyMember(!loyaltyMember);
    if (loyaltyMember) {
      setTotalAmount(totalAmount * 0.8);
    } else {
      setTotalAmount(totalAmount / 0.8);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={shippingInfo.name}
          onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
        />
      </div>
      <div>
        <label>Address: </label>
        <input
          type="text"
          value={shippingInfo.address}
          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
        />
      </div>
      <div>
        <label>Buy Loyalty Membership (£5): </label>
        <input type="checkbox" checked={loyaltyMember} onChange={toggleLoyalty} />
      </div>
      <h3>Total: £{totalAmount}</h3>
      <button onClick={handleSubmitOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
