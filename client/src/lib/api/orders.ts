import axiosInstance from "./axios.instance";
import type { CreateOrder, Order } from "@/types/orders";

export const createOrder = async (orderData: CreateOrder): Promise<Order> => {
  const response = await axiosInstance.post("/orders", orderData);
  return response.data.data;
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await axiosInstance.get("/orders");
  return response.data.data;
};
