import PageTitle from "@/components/common/PageTitle";
import { useCart } from "@/store/useCart";
import { formatPrice } from "@/lib/utils/formatPrice";
import { Button } from "@/components/ui/Button";
import CartItem from "./CartItem";
import { useCreateOrder } from "@/hooks/useOrders";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useProductsByIds } from "@/hooks/useProducts";
import { useEffect, useMemo } from "react";
import { AxiosError } from "axios";

const Cart = () => {
  const { items, clearCart, getTotalPrice, updateQuantity, removeItem } =
    useCart();

  const { mutate: createOrder, isPending } = useCreateOrder();

  const navigate = useNavigate();

  const productIds = useMemo(
    () => items.map((item) => item.product.id),
    [items],
  );

  const { data: products } = useProductsByIds(productIds);

  const updatedItems = useMemo(() => {
    if (!products) return items;

    return items.map((item) => {
      const currentProduct = products.find((p) => p.id === item.product.id);

      if (currentProduct) {
        return {
          ...item,
          product: {
            ...item.product,
            stock: currentProduct.stock,
          },
        };
      }

      return item;
    });
  }, [items, products]);

  useEffect(() => {
    if (!products) return;

    items.forEach((cartItem) => {
      const currentProduct = products.find((p) => p.id === cartItem.product.id);

      if (!currentProduct) return;

      if (cartItem.product.stock !== currentProduct.stock) {
        if (cartItem.quantity > currentProduct.stock) {
          if (currentProduct.stock === 0) {
            removeItem(cartItem.product.id);

            toast.error(`${cartItem.product.name} is out of stock`);
          } else {
            updateQuantity(cartItem.product.id, currentProduct.stock);

            toast.warning(
              `${cartItem.product.name} quantity adjusted to ${currentProduct.stock}`,
            );
          }
        }
      }
    });
  }, [products]);

  const hasOutOfStockItems = updatedItems.some(
    (item) => item.product.stock === 0,
  );

  const hasOverStockItems = updatedItems.some(
    (item) => item.quantity > item.product.stock,
  );

  const canCreateOrder =
    updatedItems.length > 0 && !hasOutOfStockItems && !hasOverStockItems;

  const handleCreateOrder = () => {
    const orderData = {
      items: updatedItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    };

    createOrder(orderData, {
      onSuccess: () => {
        clearCart();

        toast.success("order created successfully");

        navigate("/orders");
      },
      onError: (error: AxiosError<{ message?: string }>) => {
        const message =
          error.response?.data?.message ||
          "failed to create order. please try again.";

        toast.error(message);
      },
    });
  };

  if (updatedItems.length === 0) {
    return (
      <div className="container min-h-screen py-4 lg:py-8">
        <PageTitle title="Your Cart" />

        <p className="text-dark text-center text-lg mb-4">your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container min-h-screen py-4 lg:py-8">
      <PageTitle title="Your Cart" />

      {updatedItems.map((item) => (
        <div key={item.product.id}>
          <CartItem item={item} />
        </div>
      ))}

      <div className="py-4">
        <div className="flex justify-between">
          <p className="text-xl font-medium">Total Products:</p>
          <p className="text-xl font-bold">
            {updatedItems.reduce((total, item) => total + item.quantity, 0)}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-xl font-medium">Total Price:</p>

          <p className="text-xl font-bold">{formatPrice(getTotalPrice())}</p>
        </div>

        {hasOutOfStockItems && (
          <p className="text-red-500 text-sm mt-2">
            some items are out of stock please remove them to continue
          </p>
        )}

        {hasOverStockItems && (
          <p className="text-red-500 text-sm mt-2">
            some items exceed available stock please adjust quantities
          </p>
        )}

        <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-t-muted">
          <Button className="w-full" onClick={clearCart} disabled={isPending}>
            Clear Cart
          </Button>

          <Button
            className="w-full"
            disabled={!canCreateOrder || isPending}
            onClick={handleCreateOrder}
          >
            {isPending ? "Creating Order..." : "Create Order"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
