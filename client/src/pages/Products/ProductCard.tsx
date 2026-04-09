import type { Product } from "@/types/products";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/store/useCart";
import { formatPrice } from "@/lib/utils/formatPrice";
import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem, getItemQuantity } = useCart();

  const quantityInCart = getItemQuantity(product.id);

  const remainingStock = product.stock - quantityInCart;

  const isOutOfStock = remainingStock <= 0;

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isOutOfStock) return;
    addItem(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-light hover:-translate-y-1.5 transition duration-300 text-dark rounded-lg group shadow-md p-5 flex flex-col gap-3"
    >
      <div>
        <img
          src="https://placehold.co/300x300"
          alt={product.name}
          className="w-full group-hover:scale-[102%] rounded-lg h-auto transition-transform duration-300"
        />

        <h3 className="font-medium text-lg mt-2 mb-1 truncate">
          {product.name}
        </h3>

        <p className="text-xl font-bold mb-2">{formatPrice(product.price)}</p>

        <div className="flex items-center gap-1">
          <p className="text-sm">Stock: {product.stock}</p>

          {quantityInCart > 0 && (
            <p className="text-primary mt-0.75 text-xs font-medium">
              ({quantityInCart} in cart)
            </p>
          )}
        </div>
      </div>

      <Button
        onClick={(e) => handleAddToCart(e)}
        disabled={isOutOfStock}
        className="w-full"
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </Link>
  );
};

export default ProductCard;
