import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../../Shared/Loading";

import { useEffect } from "react";
import { useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://nyx-wolves-2022.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      });
  }, [id]);

  const { image, price, text, name } = product;
  return (
    <section className="lg:pt-20 lg:pb-24 lg:px-12 p-5">
      <div className="h-screen flex justify-center items-center">
        <div className="  my-card rounded-lg overflow-hidden p-10 relative">
          {loading ? (
            <div className="text-center">
              <Loading />
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div className="flex flex-col items-center gap-5 justify-start">
                <img src={image && image[0]} alt="" className="rounded " />
                <img
                  src={image && image[1]}
                  alt=""
                  className="rounded w-[200px]"
                />
              </div>
              <div className="p-10">
                <h3 className="text-[#ff5200] text-3xl">{name}</h3>
                <p className=" text-3xl">Price: ${price}</p>
                <p className="text-gray-500">
                  <span className="font-bold">Description:</span> {text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
