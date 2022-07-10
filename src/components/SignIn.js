import React from "react";
import { HiOutlineChat } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  return (
    <div className="shadow-lg flex flex-col items-center justify-center w-[70%] sm:w-[50%] lg:w-[35%] h-[65%] bg-white m-auto">
      <HiOutlineChat className="w-12 h-12 text-blue-700 mb-5" />
      <div className="flex mt-2">
        <FcGoogle className="w-[30px] h-[30px] md:w-[45px] md:h-[45px]" />
        <h1 className="text-xl md:pt-2 pl-1">Sign In with Google</h1>
      </div>

      <div className="rounded-lg bg-[#4964c7] p-3 mt-[35%]">
        <button>Sign In with Google</button>
      </div>
    </div>
  );
}

export default SignIn;
