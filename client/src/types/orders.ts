export interface OrderItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

export interface CreateOrderItem {
  productId: number;
  quantity: number;
}

export interface CreateOrder {
  items: CreateOrderItem[];
}

export interface Order {
  id: number;
  items: OrderItem[];
  totalPrice: number;
  totalQuantity: number;
  createdAt: string;
}
