export interface OrderItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    isLoyalty?: boolean;
  }
  
  export interface Order {
    orderNumber: number;
    customerId: number;
    items: OrderItem[];
    totalAmount: number;
  }