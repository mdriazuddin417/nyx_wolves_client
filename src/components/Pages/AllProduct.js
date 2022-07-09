import React from "react";
import useProducts from "../../customHook/useProducts";
import SingleProduct from "./SingleProduct";

const AllProduct = () => {
  const [products, refetch, loading] = useProducts();
  return (
    <section className="lg:py-15">
      <h3 className="text-center text-3xl font-bold my-10">All Product</h3>
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
    </section>
  );
};

export default AllProduct;
