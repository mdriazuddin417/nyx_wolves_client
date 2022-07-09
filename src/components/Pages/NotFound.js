import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="hero h-[80vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl text-red-500 font-bold">404</h1>
          <p className="py-6 text-5xl">Page Not Found</p>
          <Link to={"/"}>
            <button className="btn btn-primary">Go to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
