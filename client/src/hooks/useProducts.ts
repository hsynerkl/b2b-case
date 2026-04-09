import {
  getProductById,
  getProducts,
  getProductsByIds,
} from "@/lib/api/products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (search?: string, minStock?: number) => {
  const params = {
    ...(search && { search }),
    ...(minStock !== undefined && { minStock }),
  };

  return useQuery({
    queryKey: ["products", search, minStock],
    queryFn: () => getProducts(params),
    retry: 2,
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    retry: 2,
  });
};

export const useProductsByIds = (ids: number[]) => {
  return useQuery({
    queryKey: ["products-by-ids", ids.sort().join(",")],
    queryFn: () => getProductsByIds(ids),
    enabled: ids.length > 0,
    retry: 2,
  });
};
