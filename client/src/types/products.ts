export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface QueryParams {
  search?: string;
  minStock?: number;
  ids?: string;
}
