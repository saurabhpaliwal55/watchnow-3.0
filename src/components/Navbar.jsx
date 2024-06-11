import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-10 flex items-center justify-between text-center h-[9vh]">
      <div className="logo text-center">
        <Link to={"/"}>
          <h1 className="text-[#AE7AFF] text-xl cursor-pointer">WatchNowTv</h1>
        </Link>
      </div>
      <div className="search">
        <input
          className="bg-black text-white px-5 py-1 w-72 border border-white rounded-md"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="right text-white">
        <Link to={"/login"}>
          <button className="px-5 py-2">Log in</button>
        </Link>
        <Link to={"/register"}>
          <button className="bg-[#AE7AFF] p-2 text-black">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
