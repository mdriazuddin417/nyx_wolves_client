import React from "react";
import useProducts from "../../customHook/useProducts";
import SingleProduct from "./SingleProduct";

const AllProduct = () => {
  const [products, refetch, loading] = useProducts();
  return (
    <div className="flex justify-center items-center lg:px-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products?.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
