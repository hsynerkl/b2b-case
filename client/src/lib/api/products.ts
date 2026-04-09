import axiosInstance from "./axios.instance";
import type { Product, QueryParams } from "@/types/products";

export const getProducts = async (params?: QueryParams): Promise<Product[]> => {
  const response = await axiosInstance.get("/products", { params });
  return response.data.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data.data;
};

export const getProductsByIds = async (ids: number[]): Promise<Product[]> => {
  const idsParam = ids.join(",");
  const response = await axiosInstance.get(`/products?ids=${idsParam}`);
  return response.data.data;
};
