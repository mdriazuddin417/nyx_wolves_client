import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { name, price, image, text, _id } = product;
  return (
    <div className="my-card p-8">
      <div className="space-y-3">
        <img src={image} alt="" className="rounded" />
        <h3 className="text-xl font-semibold text-[#ff5200]">{name}</h3>
        <p className="text-2xl font-bold">
          Price: <span className="text-blue-600">${price}</span>
        </p>
        <p className="text-md text-gray-500 " title={`${text}`}>
          Description:{text.length < 120 ? text : text.slice(0, 120)}...
          <span className="link">Read More</span>
        </p>
        <div className="flex justify-between items-center ">
          <button className="px-8 py-2 text-white my-btn font-semibold rounded-xl">
            Update
          </button>
          <button className="px-8 py-2 text-white my-btn font-semibold rounded-xl">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
