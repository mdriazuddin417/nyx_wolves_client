import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";

const SingleProduct = ({ product, refetch }) => {
  const { name, price, image, text, _id } = product;
  const dispatch = useDispatch();
  const { increaseCount, decreaseCount } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  return (
    <section
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="my-card p-8"
    >
      <div className="space-y-3">
        <img src={image[0]} alt="" className="rounded" />
        <h3 className="text-xl font-semibold text-[#ff5200]">{name}</h3>
        <p className="text-2xl font-bold">
          Price: <span className="text-blue-600">${price}</span>
        </p>
        <p className="text-md text-gray-500 ">
          <span className="font-bold">Description: </span>
          {text.length < 120 ? text : text.slice(0, 120)}...
          <Link to={`/details/${_id}`} className="link">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center ">
          <Link to={`/updateproduct/${_id}`}>
            <button
              onClick={() => {
                increaseCount(1);
              }}
              className="px-8 py-2 text-white my-btn font-semibold rounded-xl"
            >
              Update
            </button>
          </Link>

          <label
            onClick={() => {
              decreaseCount(1);
            }}
            htmlFor="product_delete"
            className="px-8 py-2 text-white my-btn font-semibold rounded-xl"
          >
            Delete
          </label>
        </div>
        <DeleteModal id={_id} refetch={refetch} />
      </div>
    </section>
  );
};

export default SingleProduct;
