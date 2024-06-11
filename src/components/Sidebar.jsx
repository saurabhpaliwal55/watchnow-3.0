import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-[90vh] min-w-[18vw] border border-white p-5">
      <div>
        <Link to={"/"}>
          <div className="border border-white px-2 py-1 my-1">Home</div>
        </Link>
        <div className="border border-white px-2 py-1 my-1">Liked Videos</div>
        <div className="border border-white px-2 py-1 my-1">History</div>
        <Link to={"profile-video"}>
          <div className="border border-white px-2 py-1 my-1">My Content</div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="border border-white px-2 py-1 my-1">Dashboard</div>
        </Link>
      </div>
      <div>
        <div className="border border-white px-2 py-1 my-1">Support</div>
        <div className="border border-white px-2 py-1 my-1">Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
