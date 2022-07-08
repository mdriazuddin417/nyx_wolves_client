import React from "react";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="min-w-[300px] w-[450px] my-card rounded-lg overflow-hidden p-10 relative">
        <div className="my-child-path flex justify-around items-center">
          <div className="w-1 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
          <div className="w-1 h-full bg-white"></div>
        </div>
        <div>
          <h3 className="uppercase text-3xl text-[#ff5200] font-bold text-center my-5">
            Product Update
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                className="my-input"
                placeholder="Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-sm">Product name is required</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Price"
                className="my-input"
                {...register("price", {
                  required: { value: true, message: "Price  is Required" },
                })}
              />
              {errors.price?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.price?.message}
                </span>
              )}
            </div>
            <div className=" ">
              <label class="block my-input">
                <span class="sr-only">Choose profile photo</span>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                />
              </label>
              {errors.image?.type === "required" && (
                <p className="text-red-500 text-sm">First image is required</p>
              )}
            </div>
            <div>
              <label class="block my-input">
                <span class="sr-only">Choose profile photo</span>
                <input
                  {...register("image2", { required: true })}
                  type="file"
                  class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                />
              </label>
              {errors.image2?.type === "required" && (
                <p className="text-red-500 text-sm">Second image is required</p>
              )}
            </div>
            <div>
              <textarea
                {...register("text", { required: true })}
                type="text"
                className="my-input"
                placeholder="Short Description"
              />
              {errors.text?.type === "required" && (
                <p className="text-red-500 text-sm">Description is required</p>
              )}
            </div>

            <div>
              <input
                className="w-full py-3 px-2 rounded-lg my-btn text-white font-samibold text-lg "
                type="submit"
                value={"Update Product"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
