import React from "react";
import useProducts from "../../customHook/useProducts";
import SingleProduct from "./SingleProduct";
import Loading from "../../Shared/Loading";

const Products = () => {
  const [products, refetch, loading] = useProducts();

  return (
    <section className="my-10 lg:px-12 lg:py-10 p-5 ">
      <div>
        <h2 className="text-4xl text-center text-[#ff5200] font-bold">
          Our Products
        </h2>
        <p className="text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam
          quidem,{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 mx-auto">
            {products?.slice(0, 6)?.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
