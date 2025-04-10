import { Order } from '../models/Order';

const apiUrl = 'http://localhost:5000/api/';

export const api = {
  submitOrder: async (order: Order) => {
    const response = await fetch(`${apiUrl}orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    return response.json();
  },
};
