import { Input } from "@/components/ui/Input";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import { useState, useCallback, type ChangeEvent } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "./ProductCard";
import PageTitle from "@/components/common/PageTitle";

const Products = () => {
  const [search, setSearch] = useState("");
  const [minStock, setMinStock] = useState<number>(1);

  const debouncedSearch = useDebounce(search.trim(), 500);
  const debouncedMinStock = useDebounce(minStock, 500);

  const {
    data: products,
    isLoading,
    isError,
  } = useProducts(debouncedSearch, debouncedMinStock);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const handleMinStockChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMinStock(Number(e.target.value));
    },
    [],
  );

  return (
    <div className="container min-h-screen py-4 lg:py-8">
      <PageTitle title="Products" />

      <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
        <div className="lg:col-span-3 border h-fit border-gray p-2.5 rounded-lg flex flex-col gap-3">
          <Input
            label="Search Products"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />

          <Input
            label="Minimum Stock"
            type="number"
            placeholder="Min stock"
            value={minStock}
            onChange={handleMinStockChange}
          />
        </div>

        <div className="lg:col-span-9">
          {Array.isArray(products) && (
            <p className="font-medium text-sm mb-4">
              {products?.length} products found
            </p>
          )}

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-fadeInDown"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <ProductCardSkeleton />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <p className="text-red-500 text-center font-medium">
              An error occurred while loading products
            </p>
          )}

          {!isLoading && !isError && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={`${product.id}-${debouncedMinStock}-${debouncedSearch}`}
                  className="animate-fadeInDown"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
