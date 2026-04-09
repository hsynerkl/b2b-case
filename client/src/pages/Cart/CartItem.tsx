import type { CartItem as CartItemType } from "@/store/useCart";
import { useCart } from "@/store/useCart";
import { formatPrice } from "@/lib/utils/formatPrice";
import { CloseIcon } from "@/assets/icons";
import { Button } from "@/components/ui/Button";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  const isMaxStock = item.quantity >= item.product.stock;
  const isOutOfStock = item.product.stock === 0;

  const handleDecrease = () => {
    updateQuantity(item.product.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    if (item.quantity >= item.product.stock) return;
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeItem(item.product.id);
  };

  return (
    <div className="py-4 border-b border-b-muted text-dark">
      <div className="lg:hidden space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-medium text-base">{item.product.name}</h3>

            <p className="text-muted text-sm mt-1">
              Stock: {item.product.stock}
            </p>
          </div>

          <Button onClick={handleRemove}>
            <CloseIcon className="w-4 h-4 fill-current" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted">Unit Price</p>

            <p className="text-lg font-bold">
              {formatPrice(item.product.price)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={handleDecrease}
              disabled={isOutOfStock}
              className="w-8 h-8 text-lg"
            >
              -
            </Button>

            <span className="w-10 text-center font-bold text-base">
              {item.quantity}
            </span>

            <Button
              onClick={handleIncrease}
              disabled={isMaxStock || isOutOfStock}
              className="w-8 h-8 text-lg"
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-muted">
          <p className="text-lg text-muted">Total</p>

          <p className="text-xl font-bold">
            {formatPrice(item.product.price * item.quantity)}
          </p>
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6 lg:items-center">
        <div>
          <h3 className="font-medium text-lg">{item.product.name}</h3>

          <p className="text-muted text-sm mt-1">Stock: {item.product.stock}</p>
        </div>

        <p className="text-xl text-center font-bold">
          {formatPrice(item.product.price)}
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button onClick={handleDecrease} disabled={isOutOfStock}>
            -
          </Button>

          <span className="w-12 text-center font-bold text-lg">
            {item.quantity}
          </span>

          <Button
            onClick={handleIncrease}
            disabled={isMaxStock || isOutOfStock}
          >
            +
          </Button>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-dark">
            {formatPrice(item.product.price * item.quantity)}
          </p>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleRemove}>Remove Product</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
