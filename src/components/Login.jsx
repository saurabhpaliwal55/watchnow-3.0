import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen">
      <div className="w-3/4 py-2 border border-white mx-auto z-50 bg-black">
        <div className="flex items-center justify-between my-2 px-5 py-1">
          <div className="text-xl">Login</div>
          <div>
            <Link to={"/register"}>
              <button className="bg-[#AE7AFF] py-1 px-2 text-black">
                Register
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="my-2">
          <form className="flex flex-col w-2/4 mx-auto pt-5">
            <label htmlFor="email" className="text-sm mt-2 mb-1">
              Email / Username
            </label>
            <input
              id="email"
              type="email"
              className="border border-white px-2 py-1 bg-black"
            />
            <label htmlFor="password" className="text-sm mt-2 mb-1">
              Password
            </label>
            <input
              id="password"
              type="text"
              className="border border-white px-2 py-1 bg-black"
            />
            <div className="flex items-center gap-2 text-center">
              <button className="bg-[#AE7AFF] py-1 px-2 text-black w-20 mt-2">
                Login
              </button>
              <p className="text-sm py-1 px-2 mt-5 font-thin">
                Don't have an account? <Link to={"/register"}>Create One!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
