import React from "react";
import { Link } from "react-router-dom";

const SidebarIcons = () => {
  return (
    <div className="flex flex-col justify-between h-[90vh] min-w-4 border-r-2 p-4">
      <div className="flex flex-col gap-1 cursor-pointer">
        <Link to={"/"}>
          <span className="material-symbols-outlined border border-white rounded-md p-1">
            home
          </span>
        </Link>
        <span className="material-symbols-outlined border border-white rounded-md p-1">
          thumb_up
        </span>
        <span class="material-symbols-outlined border border-white rounded-md p-1">
          history
        </span>
        <span class="material-symbols-outlined border border-white rounded-md p-1">
          videocam
        </span>
        <span class="material-symbols-outlined border border-white rounded-md p-1">
          folder
        </span>
        <Link to={"/profile-video"}>
          <span class="material-symbols-outlined border border-white rounded-md p-1">
            person
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer">
        <span class="material-symbols-outlined border border-white rounded-md p-1">
          help
        </span>
        <span class="material-symbols-outlined border border-white rounded-md p-1">
          settings
        </span>
      </div>
    </div>
  );
};

export default SidebarIcons;
