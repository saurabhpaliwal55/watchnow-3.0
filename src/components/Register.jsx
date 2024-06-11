import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen">
      <div className="w-3/4 py-2 border border-white mx-auto z-50 bg-black">
        <div className="flex items-center justify-between my-2 px-5 py-1">
          <div className="text-xl">Register</div>
          <div>
            <Link to={"/login"}>
              <button className="bg-[#AE7AFF] py-1 px-2 text-black">
                Login
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="my-2">
          <form className="flex flex-col w-2/4 mx-auto pt-5">
            <label htmlFor="name" className="text-sm mt-2 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border border-white px-2 py-1 bg-black"
            />
            <label htmlFor="username" className="text-sm mt-2 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="border border-white px-2 py-1 bg-black"
            />
            <label htmlFor="email" className="text-sm mt-2 mb-1">
              Email
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
            <label htmlFor="avatar" className="text-sm mt-2 mb-1">
              Avatar Image*
            </label>
            <input
              id="avatar"
              type="file"
              className="border border-white p-1"
            />
            <label htmlFor="cover" className="text-sm mt-2 mb-1">
              Cover Image
            </label>
            <input id="cover" type="file" className="border border-white p-1" />
            <div className="flex items-center gap-2 text-center">
              <button className="bg-[#AE7AFF] py-1 px-2 text-black w-20 mt-2">
                Register
              </button>
              <p className="text-sm py-1 px-2 mt-5 font-thin">
                Already a user? <Link to={"/login"}>Login!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
