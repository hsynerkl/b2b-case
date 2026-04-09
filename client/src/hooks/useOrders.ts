import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder, getOrders } from "@/lib/api/orders";
import type { CreateOrder } from "@/types/orders";

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    retry: 2,
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (orderData: CreateOrder) => createOrder(orderData),
  });
};
