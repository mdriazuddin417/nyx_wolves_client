import axios from "axios";
import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { id } = useParams();
  const [pic, setPic] = useState("");

  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.image[0];
    const image2 = data.image2[0];

    const formData = new FormData();

    formData.append("image", image);
    formData.append("image", image2);

    await axios
      .post(
        "https://api.imgbb.com/1/upload?key=0e53fbea7f6ba111a8e8e78349d06c7b",
        formData,
      )
      .then((res) => {
        const img = res?.data?.data?.display_url;
        setPic(img);
        console.log("Work 1");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

    await axios
      .post(
        "https://api.imgbb.com/1/upload?key=0e53fbea7f6ba111a8e8e78349d06c7b",
        formData,
      )
      .then((res) => {
        const img2 = res?.data?.data?.display_url;

        const picture = [pic, img2];
        const product = { ...data, image: picture };
        axios
          .patch(`http://localhost:5000/product/${id}`, product)
          .then((res) => {
            setLoading(false);
            toast.success("Update  successfully !");
            reset();
          });
      })
      .catch((error) => {
        toast.error(error?.message);
        setLoading(false);
      });
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
            Please Login
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="my-input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm">Product name is required</p>
              )}
            </div>
            <div>
              <input
                {...register("password", { required: true })}
                type="password"
                className="my-input"
                placeholder="Password"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm">Password is recoured</p>
              )}
            </div>

            <div>
              <input
                className="w-full py-3 px-2 rounded-lg my-btn text-white font-samibold text-lg "
                type="submit"
                value={"Submit"}
              />
            </div>
          </form>
          <div className="divider">OR</div>
          <div>
            <button className="w-full py-3 px-2 rounded-lg bg-gray-700 text-white font-samibold text-lg ">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
