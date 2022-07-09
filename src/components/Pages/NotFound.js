import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="hero h-[80vh] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-8xl text-red-500 font-bold">404</h1>
          <p class="py-6 text-5xl">Page Not Found</p>
          <Link to={"/"}>
            <button class="btn btn-primary">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
