import React from "react";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <div className="my-10 lg:px-12">
      <div>
        <h2 className="text-4xl text-center text-[#ff5200] font-bold">
          Our Services
        </h2>
        <p className="text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam
          quidem,{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 mx-auto">
          <SingleService />
          <SingleService />
          <SingleService />
        </div>
      </div>
    </div>
  );
};

export default Services;
