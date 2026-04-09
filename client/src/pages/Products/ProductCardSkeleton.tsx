const ProductCardSkeleton = () => {
  return (
    <div className="bg-light animate-pulse rounded-lg shadow-md p-5">
      <div className="w-78.25 h-78.25 bg-gray rounded-lg" />

      <div className="h-7 w-32 mt-2 mb-1 bg-gray rounded-lg" />

      <div className="h-7 w-16 mb-2 bg-gray rounded-lg" />

      <div className="w-40 h-5 bg-gray rounded-lg" />

      <div className="h-8 bg-gray rounded-full mt-3" />
    </div>
  );
};

export default ProductCardSkeleton;
