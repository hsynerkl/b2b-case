export interface OrderItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  items: OrderItem[];
  totalPrice: number;
  totalQuantity: number;
  createdAt: Date;
}
