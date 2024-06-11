import React from "react";
import NormalCard from "./Cards/NormalCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  return (
    <div className="flex flex-wrap overflow-y-scroll max-h-[90vh] mx-2 my-2">
      <Link to={"/video-player"}><NormalCard /></Link>
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
      <NormalCard />
    </div>
  );
};

export default VideoContainer;
