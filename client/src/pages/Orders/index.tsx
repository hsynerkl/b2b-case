import { useState } from "react";
import PageTitle from "@/components/common/PageTitle";
import { useOrders } from "@/hooks/useOrders";
import { formatPrice } from "@/lib/utils/formatPrice";
import { format } from "date-fns";
import { clsx } from "clsx";

const Orders = () => {
  const { data: orders, isLoading, error } = useOrders();
  const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null);

  const toggleOrder = (orderId: number) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if (isLoading) {
    return (
      <div className="container min-h-screen py-4 lg:py-8">
        <PageTitle title="Your Orders" />

        <p className="text-center text-muted">loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container min-h-screen py-4 lg:py-8">
        <PageTitle title="Your Orders" />

        <p className="text-center text-red-500">failed to load orders</p>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="container min-h-screen py-4 lg:py-8">
        <PageTitle title="Your Orders" />

        <p className="text-dark text-center text-lg mb-4">no orders yet</p>
      </div>
    );
  }

  return (
    <div className="container min-h-screen py-4 lg:py-8">
      <PageTitle title="Your Orders" />

      <div className="space-y-6">
        {orders.map((order) => {
          const isExpanded = expandedOrderId === order.id;

          return (
            <div
              key={order.id}
              className="border border-muted rounded-lg overflow-hidden"
            >
              <div
                className="flex cursor-pointer hover:bg-primary-light p-2.5 items-center justify-between"
                onClick={() => toggleOrder(order.id)}
              >
                <div>
                  <h3 className="font-bold text-xl">Order #{order.id}</h3>

                  <p className="text-sm text-muted mt-1">
                    {format(new Date(order.createdAt), "dd/MM/yyyy")}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted">Order Total</p>

                  <p className="text-2xl font-bold">
                    {formatPrice(order.totalPrice)}
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "grid transition-all duration-300 ease-in-out",
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-2.5">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={clsx(
                          "grid grid-cols-2 lg:grid-cols-4 py-2",
                          idx !== order.items.length - 1 &&
                            "border-b border-b-muted",
                        )}
                      >
                        <h4 className="font-medium text-lg">
                          {item.productName}
                        </h4>

                        <p className="text-xl text-right font-bold">
                          {formatPrice(item.price)}
                        </p>

                        <span className="text-lg font-bold">
                          x {item.quantity}
                        </span>

                        <p className="text-2xl font-bold text-right text-dark">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
