import React, { useEffect, useState } from "react";
import DashboardCard from "./Cards/DashboardCard";
import VideoModal from "./modals/VideoModal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  useEffect(() => {}, [setModal]);
  return (
    <>
      {modal && <VideoModal setModal={setModal} />}
      <div className="mx-auto mt-5 w-full px-10">
        <div className="flex justify-between content-center">
          <div>
            <div className="text-2xl">Welcome back, Olivia</div>
            <div className="text-sm">
              Track, manage and forecast your customers and orders.
            </div>
          </div>
          <div>
            <button
              className="bg-[#AE7AFF] p-2 text-black"
              onClick={handleClick}
            >
              Upload Video
            </button>
          </div>
        </div>
        <div className="flex justify-between content-center gap-5 my-5">
          <div className="border border-white w-full p-6">
            <span class="material-symbols-outlined">visibility</span>
            <p className="text-sm">Total Views</p>
            <h1 className="text-2xl">221,234</h1>
          </div>
          <div className="border border-white w-full p-6">
            <span class="material-symbols-outlined">how_to_reg</span>
            <p className="text-sm">Total Views</p>
            <h1 className="text-2xl">221,234</h1>
          </div>
          <div className="border border-white w-full p-6">
            <span class="material-symbols-outlined">favorite</span>
            <p className="text-sm">Total Views</p>
            <h1 className="text-2xl">221,234</h1>
          </div>
        </div>
        <table class="table-fixed w-full items-center text-center border border-white rounded-lg">
          <thead className="py-2">
            <tr className="py-2 font-thin">
              <th className="w-full p-2 font-thin">Published</th>
              <th className="w-full font-thin">Status</th>
              <th className="w-full font-thin">Uploaded</th>
              <th className="w-full font-thin">Rating</th>
              <th className="w-full font-thin">Date Uploaded</th>
              <th className="w-full font-thin">Actions</th>
            </tr>
          </thead>
          <tbody>
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
