import { useProduct } from "@/hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import PageTitle from "@/components/common/PageTitle";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";

{
  /* detay sayfası tasarlamalımıyım emin olamadım o yüzden product cardı bastırdım */
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = useProduct(id);

  return (
    <div className="container py-4 lg:py-8">
      <PageTitle title="Product Detail" />

      <div className="animate-fadeInDown max-w-sm">
        {isLoading && <ProductCardSkeleton />}

        {!isLoading && !isError && !isLoading && product && (
          <ProductCard product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
