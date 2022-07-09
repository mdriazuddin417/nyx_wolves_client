import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    toast.success("Login success");
    navigate("/");
  }
  return (
    <div>
      <div className="divider">OR</div>
      <div
        onClick={() => signInWithGoogle()}
        className="my-input mt-3 cursor-pointer hover:bg-gray-800 hover:text-white duration-300 "
      >
        <p className="text-xl font-semibold text-center flex justify-center items-center">
          <FcGoogle className="text-2xl mr-3" /> Google
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
