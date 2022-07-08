import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { name, price, image, text, _id } = product;
  return (
    <div className="my-card p-8">
      <div className="space-y-3">
        <img src={image[0]} alt="" className="rounded" />
        <h3 className="text-xl font-semibold text-[#ff5200]">{name}</h3>
        <p className="text-2xl font-bold">
          Price: <span className="text-blue-600">${price}</span>
        </p>
        <p className="text-md text-gray-500 ">
          <span className="font-bold">Description: </span>
          {text.length < 120 ? text : text.slice(0, 120)}...
          <span className="link">Read More</span>
        </p>
        <div className="flex justify-between items-center ">
          <Link to={"/updateproduct"}>
            <button className="px-8 py-2 text-white my-btn font-semibold rounded-xl">
              Update
            </button>
          </Link>

          <label
            for="product_delete"
            className="px-8 py-2 text-white my-btn font-semibold rounded-xl"
          >
            Delete
          </label>
        </div>
        <DeleteModal />
      </div>
    </div>
  );
};

export default SingleProduct;
