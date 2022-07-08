import React from "react";

const SingleService = () => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-around">
            <button class="btn btn-primary">Update</button>
            <button class="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
